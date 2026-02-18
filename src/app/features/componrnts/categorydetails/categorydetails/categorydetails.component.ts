import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-categorydetails',
  imports: [],
  templateUrl: './categorydetails.component.html',
  styleUrl: './categorydetails.component.scss',
})
export class CategorydetailsComponent implements OnInit {
categoryService:CategoryService = inject(CategoryService);
category : WritableSignal<category> = signal<category>({} as category);
private activatedRoute : ActivatedRoute = inject(ActivatedRoute)

ngOnInit(): void {
  this.activatedRoute.params.subscribe((data) => {
console.log(data['id'])
  this.getALLSupCategory(data['id'])

  })
  
}


getALLSupCategory(id : string){

this.categoryService.getAllSubCategories(id).subscribe(res => {

this.category.set(res.data)
console.log(this.category())

})


}

}
