import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListereservationRestoComponent } from './listereservation-resto.component';

describe('ListereservationRestoComponent', () => {
  let component: ListereservationRestoComponent;
  let fixture: ComponentFixture<ListereservationRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListereservationRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListereservationRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
