import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent implements OnInit {
product:WritableSignal<product> = signal<product>({}as product);
private productService :ProductService=inject(ProductService)
private activatedRoute : ActivatedRoute = inject(ActivatedRoute)
ngOnInit(): void {
  this.activatedRoute.params.subscribe((data)=>{
console.log(data['id']);

 this.getSpecificProduct(data['id']);
  })
 
}
getSpecificProduct(id:string){

this.productService.getSpecificProduct(id).subscribe((res)=>{

this.product.set(res.data)
console.log(this.product())




})



}


}
