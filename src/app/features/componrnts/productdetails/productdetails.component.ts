import { Component, inject, OnInit, signal, WritableSignal,input } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { OnsalePipe } from '../../../shared/pipes/onsale/onsale-pipe';
import { CartService } from '../../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetails',
  imports: [CurrencyPipe,TitleCasePipe,DatePipe,OnsalePipe],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent implements OnInit {
  date = new Date()
products:WritableSignal<product> = signal<product>({}as product);
private productService :ProductService=inject(ProductService)
private activatedRoute : ActivatedRoute = inject(ActivatedRoute)
 cartService = inject(CartService)
 toastr = inject(ToastrService);
 product = input<product>({} as product)
ngOnInit(): void {
  this.activatedRoute.params.subscribe((data)=>{
console.log(data['id']);

 this.getSpecificProduct(data['id']);
  })
  
 
}

getSpecificProduct(id:string){

this.productService.getSpecificProduct(id).subscribe((res)=>{

this.products.set(res.data)
console.log(this.products())

});
}

addProductToCart(productId:string){

 this.cartService.addProductToCart(productId).subscribe((res)=>{
 this.toastr.success(res.message,'',{
timeOut:2000,
progressBar:true
 });
})
}

}