import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input()
  private data: Product;

  @Output()
  addToBasketEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  public addToBasket(): void {
    console.log(`Add a product to Basket ${this.data.getTitle} with price ${this.data.getPrice}`);
    this.addToBasketEvent.emit(this.data);
  }
}
