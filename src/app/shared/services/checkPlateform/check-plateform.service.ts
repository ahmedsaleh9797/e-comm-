import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckPlateformService {
constructor(@Inject(PLATFORM_ID) private ID:object){}

  checkIsPlateformBrowser(){
if(isPlatformBrowser(this.ID)){
return true;
}
  
  return false ;
   }
}
