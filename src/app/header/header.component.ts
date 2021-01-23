import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  admin = localStorage.getItem('role') === 'admin' ? true : false;


  logout() {
    let r = confirm("Are you sure you want to logout")
    if (r) {
      this.service.checkout().subscribe();
      localStorage.clear();
      this.router.navigate([''])
    }
  }

}
