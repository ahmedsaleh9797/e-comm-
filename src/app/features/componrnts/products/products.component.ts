import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HomesliderComponent } from '../home/homeslider/homeslider.component';
import { ProductcardComponent } from '../../../shared/components/productcard/productcard.component';
import { SearchproductPipe } from '../../../shared/pipes/searchproduct/searchproduct-pipe';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [HomesliderComponent,ProductcardComponent,SearchproductPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
   userSearch :string = '' ;
productList:WritableSignal<product[]>=signal<product[]>([]);
productService:ProductService=inject(ProductService);
ngOnInit() : void {
this.getAllProducts()


}
getAllProducts() {

this.productService.getAllProducts().subscribe((res)=>{
this.productList.set(res.data)
console.log(this.productList())



})



}




}
