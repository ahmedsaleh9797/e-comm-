import { Component, inject, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../../../features/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productcard',
  imports: [RouterLink],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss',
})
export class ProductcardComponent {
  cartService = inject(CartService)
product = input<product>({} as product)
toastr = inject(ToastrService);

addProductToCart(productId:string){

 this.cartService.addProductToCart(productId).subscribe((res)=>{
 this.toastr.success(res.message,'',{
timeOut:2000,
progressBar:true




 });

this.cartService.noOfCartItem.next(res.numOfCartItems)


})


}

}
