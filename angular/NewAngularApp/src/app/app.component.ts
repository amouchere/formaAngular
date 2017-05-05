import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './model/product';
import { CustomerService } from "app/service/customer.service";
import { ProductService } from "app/service/product.service";
import { Observable, } from "rxjs/Observable";
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
