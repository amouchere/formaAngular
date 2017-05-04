import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MenuComponent } from "app/menu/menu.component";
import { FooterComponent } from "app/footer/footer.component";
import { ProductComponentComponent } from "app/product-component/product-component.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent,
        ProductComponentComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Bienvenue sur Zenika Ecommerce'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Bienvenue sur Zenika Ecommerce');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header h1').textContent).toContain('Zenika');
  }));
});
