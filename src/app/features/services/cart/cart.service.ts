import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CartResponse } from '@shared/models/ICart';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from '../../../../enviroment/enviroment';


@Injectable({
  providedIn: 'root',
})
export class CartService  {
 httpClient: HttpClient = inject(HttpClient);
noOfCartItem: BehaviorSubject<number> = new BehaviorSubject<number>(0);

 
addProductToCart(productId:string):Observable<any>
{

return this.httpClient.post(`${enviroment.baseUrl}/api/v1/cart`,
  {
productId:productId

  })
}

gerLoggedUserCart()
{

return this.httpClient.get<CartResponse>(`${enviroment.baseUrl}/api/v1/cart`,{
})


}
updateProductCartCount(productId:string,count:string)
{

return this.httpClient.put<CartResponse>(`${enviroment.baseUrl}/api/v1/cart/${productId}`,
  {
count 

}

) 
}
removeSpecificProductFromCart(productId:string,)
{

return this.httpClient.delete<CartResponse>(`${enviroment.baseUrl}/api/v1/cart/${productId}`, 
{

})

 
}
clearUserCart(): Observable<any>
{
return this.httpClient.delete(`${enviroment.baseUrl}/api/v1/cart`, {




})



}
  
}
