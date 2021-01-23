import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private service:ApiServiceService,private router:Router) { 
  }
  user: {
    email:any,
    password:string
  }={
    email:"",
    password:""
  }
  ngOnInit(): void {
  }

  response:any;
  //Login function 
  login(data:any){
    console.log(data)
    this.service.login(data).subscribe((res:any)=>{
      console.log(res.token)
      localStorage.setItem('token',res.token)
      localStorage.setItem('role',res.role);
      this.router.navigate(['/attendance'])
      // Instantly call check in as soon as user logs In
      if(!sessionStorage.getItem('isPresent')){
        this.checkIn()
      }

    },
    ()=>{
      this.response="Invalid Credentials"
      setTimeout(()=>{
        this.response=''
      },3000)
    })
  }

  // check in function 
  checkIn(){
    this.service.checkIn().subscribe((data:any)=>{
      sessionStorage.setItem('isPresent',data.present);
    })
  }

}
