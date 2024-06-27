import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestobyadresseComponent } from './restobyadresse.component';

describe('RestobyadresseComponent', () => {
  let component: RestobyadresseComponent;
  let fixture: ComponentFixture<RestobyadresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestobyadresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestobyadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
