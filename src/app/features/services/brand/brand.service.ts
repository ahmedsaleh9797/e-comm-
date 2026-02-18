import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../../enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private httpClient :HttpClient = inject(HttpClient);
  getAllBrands():Observable<any>
  {
return this.httpClient.get<any>(`${enviroment.baseUrl}/api/v1/brands`)




  }


}
