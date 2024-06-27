import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementinterfaceComponent } from './paiementinterface.component';

describe('PaiementinterfaceComponent', () => {
  let component: PaiementinterfaceComponent;
  let fixture: ComponentFixture<PaiementinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementinterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
