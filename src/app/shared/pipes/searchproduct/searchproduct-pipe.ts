import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproduct',
})
export class SearchproductPipe implements PipeTransform {

  transform(productList: product[] | undefined | null, userSearch: string): product[] {
    if (!productList) return [];
    return productList.filter((item) =>
      item.title.toLowerCase().includes(userSearch.toLowerCase())
    );
  }

}
