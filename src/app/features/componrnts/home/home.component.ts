import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { CategorysliderComponent } from '../../../shared/components/categoryslider/categoryslider.component';
import { ProductService } from '../../services/product/product.service';
import { ProductcardComponent } from '../../../shared/components/productcard/productcard.component';
import { SearchproductPipe } from '../../../shared/pipes/searchproduct/searchproduct-pipe';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";

@Component({
  selector: 'app-home',
  imports: [HomesliderComponent, CategorysliderComponent, ProductcardComponent, SearchproductPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
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
