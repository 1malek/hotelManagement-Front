import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestobyambianceComponent } from './restobyambiance.component';

describe('RestobyambianceComponent', () => {
  let component: RestobyambianceComponent;
  let fixture: ComponentFixture<RestobyambianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestobyambianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestobyambianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
