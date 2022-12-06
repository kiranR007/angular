import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { EventModel } from '../event-dashboard/event-dash board.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {
  formValue !: FormGroup;
  showMe : boolean = true;
  eventData !: any;

  constructor(private formbuilder : FormBuilder,
    private api : ApiService){

  }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      eventtitle:[''],
      eventtime:[''],
      eventdate:[''],
      eventvenue:['']
    })
    this.getAllEvent()
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
      confirm("Event Canceled")
      this.getAllEvent();
    })
  }
  toggleTag(row:any){
    this.showMe=!this.showMe
  }

  }

