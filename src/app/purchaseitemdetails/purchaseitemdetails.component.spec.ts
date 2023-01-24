import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseitemdetailsComponent } from './purchaseitemdetails.component';

describe('PurchaseitemdetailsComponent', () => {
  let component: PurchaseitemdetailsComponent;
  let fixture: ComponentFixture<PurchaseitemdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseitemdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseitemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
