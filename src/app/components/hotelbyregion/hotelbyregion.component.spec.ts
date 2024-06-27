import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbyregionComponent } from './hotelbyregion.component';

describe('HotelbyregionComponent', () => {
  let component: HotelbyregionComponent;
  let fixture: ComponentFixture<HotelbyregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelbyregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelbyregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
