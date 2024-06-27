import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturereservationComponent } from './facturereservation.component';

describe('FacturereservationComponent', () => {
  let component: FacturereservationComponent;
  let fixture: ComponentFixture<FacturereservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturereservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
