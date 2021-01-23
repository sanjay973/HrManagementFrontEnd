import { NgIf } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   if(localStorage.getItem('role')==='admin' ||localStorage.getItem('role')=== 'user'){
     return true;
   }
   else{
     this.router.navigate([''])
   }
   return false;
  }
  
}
