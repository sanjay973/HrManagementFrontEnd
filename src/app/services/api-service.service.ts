import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }

  host='http://localhost:3000'


  loginUrl=this.host+'/api/authenticate'
  RegisterUserUrl=this.host+'/api/saveUser'
  savePasswordUrl=this.host+'/api/savePassword'
  checkInUrl=this.host+'/api/checkin'
  checkoutUrl=this.host+'/api/checkout';
  getAllRecordsUrl=this.host+'/api/getEmployees'
  getLastWeekAttendanceUrl=this.host+'/api/lastweek'

login(user:any){
  console.log(user)
  return this.httpClient.post(this.loginUrl,user);
}

registerUser(data:any){
  return this.httpClient.post(this.RegisterUserUrl,data);
}

savePassword(data:any){
  return this.httpClient.post(this.savePasswordUrl,data);
}

checkIn(){
  return this.httpClient.post(this.checkInUrl,null);
}

checkout(){
  return this.httpClient.post(this.checkoutUrl,null);
}

getAllrecords(){
  return this.httpClient.get(this.getAllRecordsUrl)
}


getLastWeekAttendances(){
  return this.httpClient.get(this.getLastWeekAttendanceUrl);
}
}
