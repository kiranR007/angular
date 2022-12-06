import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventparticipation',
  templateUrl: './eventparticipation.component.html',
  styleUrls: ['./eventparticipation.component.css']
})
export class EventparticipationComponent implements OnInit {
  public eventForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient,private router : Router){}

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      phonenumber:['']
    })
  }
  register(){
    this.http.post<any>("http://localhost:3000/signupUser",this.eventForm.value)
    .subscribe(res=>{
      alert("Registration is Successful");
      this.eventForm.reset();
      this.router.navigate(['eventdetails']);

    },err=>{
      alert("something went wrong")
    })
  }
}
