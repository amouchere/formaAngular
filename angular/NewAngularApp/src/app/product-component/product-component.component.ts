import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../model/product';
import { ProductService } from "app/service/product.service";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  private productService: ProductService;

  @Input()
  public data: Product;

  @Output()
  private addToBasketEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit() {
  }

  public addToBasket(): void {
    console.log(`Add a product to Basket ${this.data.title} with price ${this.data.price}`);
    this.addToBasketEvent.emit(this.data);
  }

  public isTheLast(): boolean {
    return this.productService.isTheLast(this.data.title);
  }
}
