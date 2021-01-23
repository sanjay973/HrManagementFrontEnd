import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  email:any=[];
  phone_number:any=[]
  name:any=[]
  ngOnInit(): void {
    this.service.getAllrecords().subscribe((data:any)=>{
        for(let i=0;i<data.users.length;i++){
          console.log(data.users[i])
          this.email.push(data.users[i].email)
          this.name.push(data.users[i].fullName)
          this.phone_number.push(data.users[i].phone_number)
        }
    })
  }


}
