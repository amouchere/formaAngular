import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "app/model/product";

@Pipe({
  name: 'mysorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    return value.sort(function (a: Product, b: Product) {
      return (a.price > b.price) ? 1 : 0;
    });
  }

}
