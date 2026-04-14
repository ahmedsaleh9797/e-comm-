

import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '@app/core/services/auth/auth.service';
import { MyTranslateService } from '@core/services/myTranslate/my-translate.service';
import { TranslatePipe, TranslateService, } from '@ngx-translate/core';
import { map } from 'rxjs';
import { CartService } from './../../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent   {
  authservice  = inject(AuthService)
  cartservice  = inject(CartService)
  translateService  = inject(TranslateService)

 isLogin:boolean=false;
 myTranslateService  = inject(MyTranslateService)
cartItem = toSignal(
  this.cartservice.gerLoggedUserCart().pipe(
    map(res => res.numOfCartItems)
  ),

);

changeLang() {
  const currentLang = localStorage.getItem('lang') || 'en';
  const newLang = currentLang === 'en' ? 'ar' : 'en';

  localStorage.setItem('lang', newLang); 

  this.translateService.use(newLang); 

  // document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  window.location.reload 
  
}

//   ngOnInit(): void {
// this.cartService.noOfCartItem.subscribe({
// next : data => {
//   this.cartItem.set(data)
// console.log(this.cartItem())



// }




// })

userData(){
   this.authservice.userdata.subscribe(data =>{

if(data !=null){

this.isLogin = true;


}
else{
this.isLogin = false ;


}



   })
   
  }

}
