import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BrandService } from '../../services/brand/brand.service';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent implements OnInit {
brandService :BrandService = inject(BrandService);
brandData : WritableSignal<brands[]> = signal<brands[]>([])
 userSearch :string = '' ;

  ngOnInit(): void {
    this.getAllBrands();
  }
  getAllBrands(){
this.brandService.getAllBrands().subscribe(res => {
this.brandData.set(res.data)
console.log(this.brandData())



})



  }
}
