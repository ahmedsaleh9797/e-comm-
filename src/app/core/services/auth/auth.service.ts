import { LoginComponent } from './../../components/auth/login/login.component';
import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { logInData, signUpData } from '../../../shared/models/data';
import { BehaviorSubject, Observable } from 'rxjs';
import {  enviroment } from '../../../../enviroment/enviroment';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
 userdata:BehaviorSubject<null|JwtPayload>=new BehaviorSubject<null|JwtPayload>(null);
 private router :Router = inject(Router)
  constructor(private httpClint:HttpClient,@Inject(PLATFORM_ID) id :object){
if(isPlatformBrowser(id)){
if(localStorage.getItem('userToken') !=null){

this.decodeUserData();



}




}


  }
signUp(data:signUpData):Observable<any>
{
return this.httpClint.post(`${enviroment.baseUrl}/api/v1/auth/signup`,data)


}
  logIn(data:logInData):Observable<any>
{
return this.httpClint.post(`${enviroment.baseUrl}/api/v1/auth/signin`,data)


}
decodeUserData(){
const token = localStorage.getItem('userToken')!;
const decoded = jwtDecode(token);
this.userdata.next(decoded)
console.log(this.userdata,'userData');



}
logout(){
localStorage.removeItem('userToken');
this.userdata.next(null);
this.router.navigate(['login']);

}



}
  
  


