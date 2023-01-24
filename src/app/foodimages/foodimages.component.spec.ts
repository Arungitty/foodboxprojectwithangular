import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodimagesComponent } from './foodimages.component';

describe('FoodimagesComponent', () => {
  let component: FoodimagesComponent;
  let fixture: ComponentFixture<FoodimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
