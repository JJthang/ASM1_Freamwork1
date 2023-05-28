import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductClientComponent } from './show-product-client.component';

describe('ShowProductClientComponent', () => {
  let component: ShowProductClientComponent;
  let fixture: ComponentFixture<ShowProductClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProductClientComponent]
    });
    fixture = TestBed.createComponent(ShowProductClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
