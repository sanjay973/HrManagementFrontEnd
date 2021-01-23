import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {

  userDetails:FormGroup;
error:any;

userData:{
password:any,
confirm_password:any,
verificationToken:any
}={
  password:'',
  confirm_password:'',
  verificationToken:''
}

  constructor(private formBuilder:FormBuilder,private service:ApiServiceService,private route:ActivatedRoute,private router:Router) { 
    this.userDetails=formBuilder.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      confirm_password:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  errorResponse:any;
  successResponse:any;
  createPassword(data:any){
     let token=this.route.snapshot.paramMap.get('token')
     data.verificationToken=token
    this.service.savePassword(data).subscribe((res:any)=>{
      console.log(res)
      if(!res.status){
        this.errorResponse=res.message
        setTimeout(()=>{
          this.errorResponse=''
        },3000)
        return;
      }
      if(res.status){
          this.successResponse="Password saved successfully Redirecting you to login page"
          setTimeout(() => {
              this.router.navigate([''])
          }, 3000);
      }
    })
  }
}
