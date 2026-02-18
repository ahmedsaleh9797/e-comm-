import { enviroment } from './../../../../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
 private httpClient:HttpClient = inject(HttpClient)

getAllCategories():Observable<any>
{

return this.httpClient.get<any>(`${enviroment.baseUrl}/api/v1/categories`)



}
getAllSubCategories(categoryId:string):Observable<{data : category}>
{

return this.httpClient.get<{data : category}>(`${enviroment.baseUrl}/api/v1/categories/${categoryId}/subcategories`)



}


}
