import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { MouseOverDirective } from './mouse-over.directive';
import { CustomerService } from "app/service/customer.service";
import { ProductService } from "app/service/product.service";
import { SortingPipe } from './pipe/sorting.pipe';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';

const siteTitle: string = 'Bienvenue sur Zenika Ecommerce';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // path: '/'  
  { path: 'home', component: HomeComponent },
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProductComponentComponent,
    MouseOverDirective,
    SortingPipe,
    BasketComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: 'siteTitle', useValue: siteTitle },
    { provide: LOCALE_ID, useValue: 'fr-FR' },

    CustomerService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
