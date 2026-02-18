import { Component, inject, OnInit, signal, WritableSignal, input } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { HomesliderComponent } from '../home/homeslider/homeslider.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-categories',
  imports: [HomesliderComponent, ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
categoryService : CategoryService = inject(CategoryService);
categoriesData :WritableSignal<Category[]> = signal<Category[]>([]);
category =input<category>({} as category) 
ngOnInit(): void {
  this.getAllCategories()
}
getAllCategories(){
this.categoryService.getAllCategories().subscribe(res => {
this.categoriesData.set(res.data)
console.log(this.categoriesData()) ;



})




}



}
