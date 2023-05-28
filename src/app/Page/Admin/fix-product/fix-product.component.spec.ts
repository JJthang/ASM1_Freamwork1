import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIXProductComponent } from './fix-product.component';

describe('FIXProductComponent', () => {
  let component: FIXProductComponent;
  let fixture: ComponentFixture<FIXProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FIXProductComponent]
    });
    fixture = TestBed.createComponent(FIXProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
