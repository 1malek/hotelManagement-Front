import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbyambianceComponent } from './hotelbyambiance.component';

describe('HotelbyambianceComponent', () => {
  let component: HotelbyambianceComponent;
  let fixture: ComponentFixture<HotelbyambianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelbyambianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelbyambianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
