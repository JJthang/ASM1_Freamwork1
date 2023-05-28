import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductClientDetailComponent } from './show-product-client-detail.component';

describe('ShowProductClientDetailComponent', () => {
  let component: ShowProductClientDetailComponent;
  let fixture: ComponentFixture<ShowProductClientDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProductClientDetailComponent]
    });
    fixture = TestBed.createComponent(ShowProductClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
