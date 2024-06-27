import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbyetoileComponent } from './hotelbyetoile.component';

describe('HotelbyetoileComponent', () => {
  let component: HotelbyetoileComponent;
  let fixture: ComponentFixture<HotelbyetoileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelbyetoileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelbyetoileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
