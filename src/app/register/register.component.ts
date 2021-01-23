import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userDetails:FormGroup;
error:any;

userData:{
email:any,
role:any,
phone_number:any,
fullName:any
}={
  email:[],
  role:[],
  phone_number:[],
  fullName:[]
}

  constructor(private formBuilder:FormBuilder,private service:ApiServiceService) { 
    this.userDetails=formBuilder.group({
      fullName:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      role:['',Validators.required],
      phone_number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })
  }

  ngOnInit(): void {  
  }

  errorResponse:any;
  successResponse:any;
  postData(data:any){
    this.service.registerUser(data).subscribe((res:any)=>{
        if(!res.status){
          this.errorResponse="Invalid Token"
          return;
        }
        if(res.status){
            this.successResponse="Password saved successfully Redirecting you to login page"
        }
    })
  }
 

}
