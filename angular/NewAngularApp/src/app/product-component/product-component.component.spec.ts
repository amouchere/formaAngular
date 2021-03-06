import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponentComponent } from './product-component.component';
import { Product } from './../model/product';

describe('ProductComponentComponent', () => {
  let component: ProductComponentComponent;
  let fixture: ComponentFixture<ProductComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponentComponent);
    component = fixture.componentInstance;
    component.data = new Product("Angular", "Formation Angular 2", "data:image/png;base64,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", 5, 20);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
