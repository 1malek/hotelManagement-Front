import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestobyComponent } from './restoby.component';

describe('RestobyComponent', () => {
  let component: RestobyComponent;
  let fixture: ComponentFixture<RestobyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestobyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestobyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
