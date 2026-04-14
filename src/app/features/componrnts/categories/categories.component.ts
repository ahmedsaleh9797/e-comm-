import { Component, inject, input, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-categories',
  imports: [],
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
