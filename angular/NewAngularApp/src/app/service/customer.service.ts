import { Injectable, OnInit } from '@angular/core';
import { Product } from "app/model/product";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CustomerService {


  constructor(private http: Http) {
  }

  basket: Product[] = [];

  //ajoutera	le	nouveau	produit	dans	un tableau une	méthode
  public addProduct(product: Product): Observable<Response> {
    return this.http.post("http://localhost:8080/rest/basket", product);
  }

  public checkoutBasket(): Observable<Response> {
    return this.http.post("http://localhost:8080/rest/basket/confirm", "");
  }

  public getBasket(): Observable<Response> {
    let result: Observable<Response> = this.http.get("http://localhost:8080/rest/basket")
      .map((result: Response): any => result.json())
      .map((result: Product[]): any => {
        return result.map(obj => new Product(obj.title, obj.description, obj.photo, obj.price, obj.stock))
      }).do(data => this.basket = data);;
    return result;

  }

  public getTotal(): number {
    let total: number = 0;
    this.basket.forEach(value => total += value.price);
    console.log("refresh total" + total);
    return total;
  }


}
