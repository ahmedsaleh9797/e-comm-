import { inject, Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'
import { CheckPlateformService } from '../../../shared/services/checkPlateform/check-plateform.service';
@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  translateService : TranslateService = inject (TranslateService) 
  checkPlateformService:CheckPlateformService = inject(CheckPlateformService)
constructor() {
if (this.checkPlateformService.checkIsPlateformBrowser()){

  
let defaultLang : string = 'en' ; 
if(localStorage.getItem('lang')!= null) {
defaultLang = localStorage.getItem('lang') ! ; 

}
this.translateService.setFallbackLang(defaultLang);

this.translateService.use(defaultLang) ;

this.changeDirection(defaultLang);





}



  
}



changeLang(lang :string){
localStorage.setItem('lang',lang);

this.translateService.setFallbackLang(lang);

this.translateService.use(lang) ;

this.changeDirection(lang);

}



  changeDirection(lang : string){
document.dir = lang === 'ar ' ? 'rtl' : 'ltr'




  }
}
