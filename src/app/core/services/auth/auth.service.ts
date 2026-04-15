import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { forgetPasswordData, logInData, resetCodeData, resetNewPasswordData, signUpData, } from '@shared/models/data';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { BehaviorSubject } from 'rxjs';
import { enviroment } from '../../../../enviroment/enviroment';
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
signUp(data:signUpData)
{
return this.httpClint.post<any>(`${enviroment.baseUrl}/api/v1/auth/signup`,data)


}
  logIn(data:logInData)
{
return this.httpClint.post<any>(`${enviroment.baseUrl}/api/v1/auth/signin`,data)


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
forgetPassword(data:forgetPasswordData)
{
return this.httpClint.post(`${enviroment.baseUrl}/api/v1/auth/forgotPasswords`,data)



}
verifyResetCode(data:resetCodeData){

return this.httpClint.post(`${enviroment.baseUrl}/api/v1/auth/verifyResetCode`,data)


}
resetNewPassword(data:resetNewPasswordData){

return this.httpClint.put<any>(`${enviroment.baseUrl}/api/v1/auth/resetPassword`,data)


}
  
  

}
