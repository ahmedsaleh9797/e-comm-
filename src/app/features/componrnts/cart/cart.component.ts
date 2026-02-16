import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CartData,  } from '../../../shared/models/ICart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartData : WritableSignal<CartData> = signal<CartData>({} as CartData)
cartService : CartService = inject(CartService);

ngOnInit(): void {
  this.getLoggedUserCart()


}
getLoggedUserCart(){

this.cartService.gerLoggedUserCart().subscribe(res=> {
this.cartData.set(res.data);
console.log(this.cartData());




})


}






}
