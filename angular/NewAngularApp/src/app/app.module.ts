import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { MouseOverDirective } from './mouse-over.directive';
import { CustomerService } from "app/service/customer.service";
import { ProductService } from "app/service/product.service";
import { SortingPipe } from './pipe/sorting.pipe';

const siteTitle: string = 'Bienvenue sur Zenika Ecommerce';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProductComponentComponent,
    MouseOverDirective,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: 'siteTitle', useValue: siteTitle
    },
    {	provide:	LOCALE_ID,	useValue:	'fr-FR'	},

    CustomerService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
