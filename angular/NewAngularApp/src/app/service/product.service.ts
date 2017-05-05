import { Injectable } from '@angular/core';
import { Product } from "app/model/product";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';


interface EntryProduct {
  key: String,
  value: Product
}

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  _products: Product[] = [];

  public get products(): Observable<Response> {
    return this.http.get("http://localhost:8080/rest/products")
      .map((result: Response): any => result.json())
      .do(data => this._products = data);

    // le .do permet de récupérer la référence de l'objet une fois le subscribe fait.
    // On a donc la meme référence vers le tableau de product dans le productService et dans le appComponent
  }

  private getProduitInList(produitTitle: string): Product {
    let result: Product = this._products.find(e => e.title === produitTitle);
    return result;
  }

  public isTheLast(produitTitle: string): boolean {
    return this.getProduitInList(produitTitle).stock === 1;
  }

  public isAvailable(produitTitle: string): boolean {
    return this.getProduitInList(produitTitle).stock > 0;
  }

  public decreaseStock(produitTitle: string): void {
    this.getProduitInList(produitTitle).stock--;
  }

}
