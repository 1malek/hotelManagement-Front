import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetablerestoComponent } from './listetableresto.component';

describe('ListetablerestoComponent', () => {
  let component: ListetablerestoComponent;
  let fixture: ComponentFixture<ListetablerestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListetablerestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetablerestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
