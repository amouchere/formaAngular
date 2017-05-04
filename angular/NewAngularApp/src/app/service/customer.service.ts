import { Injectable } from '@angular/core';
import { Product } from "app/model/product";

@Injectable()
export class CustomerService {

  constructor() { }

  basket: Product[] = [];

  //ajoutera	le	nouveau	produit	dans	un tableau une	méthode
  public addProduct(product: Product): void {
    this.basket.push(product);
  }


  public getTotal(): number {
    let total: number = 0;
    this.basket.forEach(value => total += value.price);
    return total;
  }


}
