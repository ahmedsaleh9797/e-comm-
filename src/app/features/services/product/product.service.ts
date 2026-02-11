import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
constructor(private httpClient:HttpClient){}

getAllProducts():Observable<AllProductResponse>
{

return this.httpClient.get<AllProductResponse>(`${enviroment.baseUrl}/api/v1/products`)

}

getSpecificProduct(productId:string) :Observable<{data : product}>

{

return this.httpClient.get<{data : product}>(`${enviroment.baseUrl}/api/v1/products/${productId}`);




}


}
