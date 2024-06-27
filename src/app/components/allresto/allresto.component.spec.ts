import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrestoComponent } from './allresto.component';

describe('AllrestoComponent', () => {
  let component: AllrestoComponent;
  let fixture: ComponentFixture<AllrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
