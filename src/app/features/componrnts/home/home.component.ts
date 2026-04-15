import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from "@angular/forms";
import { map } from 'rxjs';
import { ProductcardComponent } from '../../../shared/components/productcard/productcard.component';
import { SearchproductPipe } from '../../../shared/pipes/searchproduct/searchproduct-pipe';
import { ProductService } from '../../services/product/product.service';
@Component({
  selector: 'app-home',
  imports: [ ProductcardComponent, SearchproductPipe, FormsModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {
    userSearch :string = '' ;
    productService:ProductService=inject(ProductService);
    productList = toSignal<any>(this.productService.getAllProducts().pipe(  map(res => res.data)))






}
