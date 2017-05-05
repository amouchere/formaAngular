import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './../model/product';
import { CustomerService } from "app/service/customer.service";
import { ProductService } from "app/service/product.service";
import { Observable, } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
 private title = 'app works!';
  private total: number = 0;
  private color = 'black';
  private customerService: CustomerService;
  private productService: ProductService;
  private products: Product[] = [];

  constructor(private router:Router, customerService: CustomerService, productService: ProductService, @Inject('siteTitle') siteTitle: string) {
    this.customerService = customerService;
    this.productService = productService;
    this.title = siteTitle;
  }

  public onAddToBasket(data: Product): void {
    console.log(`New product in basket: ${data.title}`);

    let resp: Observable<Response> = this.customerService.addProduct(data);
    resp.subscribe(() => {
      this.getProductsList();
      this.refreshBasketAndTotal();
    });

    this.color = "red";
    setTimeout(() => {
      this.color = "black";
      console.log("restore color " + this.color)
    }, 2000);

  }


  public goToBasket(): void {
    this.router.navigate([ '/basket' ]);
  }

  public isAvailable(title: string): boolean {
    return this.productService.isAvailable(title);
  }

  private getProductsList() {
    this.productService.products.subscribe((jsonObject: any): void => { this.products = jsonObject; });
  }

  private refreshBasketAndTotal() {
    this.customerService.getBasket().subscribe(() => { this.total = this.customerService.getTotal(); })
  }

  ngOnInit() {
    this.getProductsList();
    this.refreshBasketAndTotal();
  }
}
