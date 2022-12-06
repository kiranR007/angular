import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms'; 
import { ApiService } from '../shared/api.service';
import { EventModel } from './event-dash board.model';


@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit{
  formValue !: FormGroup;
  eventModelObj : EventModel = new EventModel();
  eventData !: any;
  showAdd!: boolean;
  showUpdate!:boolean;
  constructor(private formbilder: FormBuilder,
    private api : ApiService){

  }
  ngOnInit(): void{
    this.formValue = this.formbilder.group({
      eventtitle : [''],
      eventaddress:[''],
      eventtime :[''],
      eventdate : [''],
      eventvenue :['']
    })
    this.getAllEvent();
  }

  clickAddEvent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate =false;
  }
  postEventDetails(){
    this.eventModelObj.eventtitle = this.formValue.value.eventtitle;
    this.eventModelObj.eventaddress = this.formValue.value.eventaddress,
    this.eventModelObj.eventtime = this.formValue.value.eventtime;
    this.eventModelObj.eventdate = this.formValue.value.eventdate;
    this.eventModelObj.eventvenue = this.formValue.value.eventvenue;


   this.api.postEvent(this.eventModelObj)
   .subscribe(res=>{
    console.log(res);
    alert("Event Added Sucessfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEvent();
   },
   err=>{
    alert("Something went Wrong")
   })
  }
  getAllEvent(){
    this.api.getEvent()
    .subscribe(res=>{
      this.eventData = res;

    })
  }
  deleteEvent(row: any){
    this.api.deleteEvent(row.id)
    .subscribe(res=>{
      confirm("Event Deleted")
      this.getAllEvent();
    })
  }
  onEdit(row : any){
    this.showAdd=false;
    this.showUpdate =true;
    this.eventModelObj.id = row.id;
    this.formValue.controls['eventtitle'].setValue(row.eventtitle);
    this.formValue.controls['eventaddress'].setValue(row.eventaddress),
    this.formValue.controls['eventtime'].setValue(row.eventtime);
    this.formValue.controls['eventdate'].setValue(row.eventdate);
    this.formValue.controls['eventvenue'].setValue(row.eventvenue);
  }
  updateEventDetails(){
    this.eventModelObj.eventtitle = this.formValue.value.eventtitle;
    this.eventModelObj.eventaddress = this.formValue.value.eventaddress;
    this.eventModelObj.eventtime = this.formValue.value.eventtime;
    this.eventModelObj.eventdate = this.formValue.value.eventdate;
    this.eventModelObj.eventvenue = this.formValue.value.eventvenue;

    this.api.updateEvent(this.eventModelObj,this.eventModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEvent();
    })
  }
}
