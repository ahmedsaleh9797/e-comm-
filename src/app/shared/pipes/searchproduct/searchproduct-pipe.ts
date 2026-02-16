import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproduct',
})
export class SearchproductPipe implements PipeTransform {
  

  transform(productList:product[],userSearch:string): product[] {
    return productList.filter((product,index)=>{
return product.title.toLowerCase().includes(userSearch.toLowerCase())




    });
  }

}
