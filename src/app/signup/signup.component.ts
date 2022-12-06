import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  visible:boolean = true;
  changetype:boolean = true;
  visible1:boolean = true;
  changetype1:boolean = true;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUser",this.signupForm.value)
    .subscribe(res=>{
      alert("SignUp successfull")
      this.signupForm.reset();
      this.router.navigate(['login']);
    },
    err=>{
      alert("Something went wrong")
    })

  }
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  viewpass1(){
    this.visible1 = !this.visible1;
    this.changetype1 = !this.changetype1;
  }

}
