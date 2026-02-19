import { CartResponse } from './../../../shared/models/ICart';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { enviroment } from '../../../../enviroment/enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { CheckPlateformService } from '../../../shared/services/checkPlateform/check-plateform.service';


@Injectable({
  providedIn: 'root',
})
export class CartService  {
  checkPlateformService : CheckPlateformService = inject(CheckPlateformService);
  noOfCartItem : BehaviorSubject<number> = new BehaviorSubject<number>(0) ;
 httpClient: HttpClient = inject(HttpClient);
constructor(){
if(this.checkPlateformService.checkIsPlateformBrowser()){
this.gerLoggedUserCart().subscribe({
next : res => {
this.noOfCartItem.next(res.numOfCartItems) ;
console.log(this.noOfCartItem.getValue());



}


})




}




}
 
addProductToCart(productId:string):Observable<any>
{

return this.httpClient.post(`${enviroment.baseUrl}/api/v1/cart`,
  {
productId:productId
},
{
headers:{
token:localStorage.getItem('userToken')!

}

}
)



}
gerLoggedUserCart():Observable<CartResponse>
{

return this.httpClient.get<CartResponse>(`${enviroment.baseUrl}/api/v1/cart`,{
headers: {
token : localStorage.getItem('userToken') || ''


}


})

 
}
updateProductCartCount(productId:string,count:string):Observable<CartResponse>
{

return this.httpClient.put<CartResponse>(`${enviroment.baseUrl}/api/v1/cart/${productId}`,
  {
count 


},
{
headers: {
token : localStorage.getItem('userToken') || ''


}


})

 
}
removeSpecificProductFromCart(productId:string,):Observable<CartResponse>
{

return this.httpClient.delete<CartResponse>(`${enviroment.baseUrl}/api/v1/cart/${productId}`,
 
{
headers: {
token : localStorage.getItem('userToken') || ''


}


})

 
}
clearUserCart(): Observable<any>
{
return this.httpClient.delete(`${enviroment.baseUrl}/api/v1/cart`, {

headers : {
token : localStorage.getItem('userToken') || ''



}



})



}
  
}
