
import { Component, inject, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { FlowbiteService } from '../../../services/flowbite/flowbite.service';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from '../../../../features/services/cart/cart.service';
import { TranslatePipe } from '@ngx-translate/core';
import { MyTranslateService } from '../../../services/myTranslate/my-translate.service';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  cartItem :WritableSignal<number> = signal <number>(0);
  isLogin:boolean=false;
  private platformId = inject(PLATFORM_ID);
   constructor(private flowbiteService: FlowbiteService,public authService:AuthService,public cartService :CartService) {}
myTranslateService :MyTranslateService = inject(MyTranslateService)
  ngOnInit(): void {
this.cartService.noOfCartItem.subscribe({
next : data => {
  this.cartItem.set(data)
console.log(this.cartItem())



}




})


   this.authService.userdata.subscribe(data =>{

if(data !=null){

this.isLogin = true;


}
else{
this.isLogin = false ;


}



   })
   if(isPlatformBrowser(this.platformId)){
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
   }
  }
   
}
