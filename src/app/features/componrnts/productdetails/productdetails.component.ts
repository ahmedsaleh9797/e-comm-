import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject, input, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SvgIconComponent } from "angular-svg-icon";
import { OnsalePipe } from '../../../shared/pipes/onsale/onsale-pipe';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-productdetails',
  imports: [CurrencyPipe, TitleCasePipe, DatePipe, OnsalePipe, SvgIconComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent implements OnInit {
  date = new Date()
  products: WritableSignal<product> = signal<product>({} as product);
  private productService: ProductService = inject(ProductService)
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  cartService = inject(CartService)

  product = input<product>({} as product)
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data['id']);

      this.getSpecificProduct(data['id']);
    })


  }

  getSpecificProduct(id: string) {

    this.productService.getSpecificProduct(id).subscribe((res) => {

      this.products.set(res.data)
      console.log(this.products())

    });
  }

  addProductToCart(productId: string) {

    this.cartService.addProductToCart(productId).subscribe((res) => {

    })
  }

}