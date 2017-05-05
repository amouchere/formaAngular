import { Component, OnInit } from '@angular/core';
import { CustomerService } from "app/service/customer.service";
import { Product } from "app/model/product";
import { Customer } from "app/model/customer";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  private products: Product[] = [];
  private basketAsString: string = "";
  private customer: Customer = new Customer("", "", "");

  constructor(private customerService: CustomerService) {
    this.customer.name = "";
  }

  ngOnInit() {
    this.customerService.getBasket().subscribe((jsonObject: any): void => {
      this.products = jsonObject;
      this.basketAsString = JSON.stringify(jsonObject);
    });
  }

  public saveForm(): boolean {
    this.customerService.checkoutBasket().subscribe(()=> {
      
    });
    return false;
  }
}
