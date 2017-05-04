import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './model/product';
import { CustomerService } from "app/service/customer.service";
import { ProductService } from "app/service/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'app works!';
  private total: number = 0;
  private color = 'black';
  private customerService: CustomerService;
  private productService: ProductService;
  private products: Product[] = [];

  constructor(customerService: CustomerService, productService: ProductService,  @Inject('siteTitle') siteTitle: string ) {
    this.customerService = customerService;
    this.productService = productService;
    this.title = siteTitle;
  }

  public onAddToBasket(data: Product): void {
    console.log(`New product in basket: ${data.title}`);

    this.customerService.addProduct(data);
    this.productService.decreaseStock(data.title);
    this.total = this.customerService.getTotal();
    this.color = "red";
    setTimeout(() => {
      this.color = "black";
      console.log("restore color " + this.color)
    }, 3000);

  }

  public isAvailable(title:string): boolean {
    return this.productService.isAvailable(title);
  }
  ngOnInit() {
    this.products = this.productService.products;
  }


}
