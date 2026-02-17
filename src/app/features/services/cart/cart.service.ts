import { CartResponse } from './../../../shared/models/ICart';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { enviroment } from '../../../../enviroment/enviroment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartService  {
 httpClient: HttpClient = inject(HttpClient);

 
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
