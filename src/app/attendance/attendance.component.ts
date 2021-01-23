import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServiceService } from '../services/api-service.service';
declare var $: any;
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor(private router: Router, private service: ApiServiceService) { }

  ngOnInit(): void {
    this.service.getLastWeekAttendances().subscribe((res: any) => {
      let response = Array.of(res.attendance)
      console.log(response, response[0].length)
      for (let i = 0; i < response[0].length; i++) {
        let login = new Date(res.attendance[i].loginTime)
        let day = login.toString().split(" ");
        this.days.push([day[0] + " " + day[1] + " " + day[2] + " " + day[3]])
        this.loginTime.push(this.formatTime(login))
        let logout = new Date(res.attendance[i].logoutTime)
        this.logOutTime.push(this.formatTime(logout))
      }
    });
  }
  loginTime: any = []
  logOutTime: any = []
  days: any = []
  formatTime(time: any) {
    var dt = new Date(time);
    var hours = dt.getHours(); // gives the value in 24 hours format
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    var minutes = dt.getMinutes();
    var finalTime = hours + ":" + minutes + " " + AmOrPm;
    return finalTime;
  }

}
