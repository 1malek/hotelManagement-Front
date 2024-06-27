import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillehotelComponent } from './detaillehotel.component';

describe('DetaillehotelComponent', () => {
  let component: DetaillehotelComponent;
  let fixture: ComponentFixture<DetaillehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillehotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
