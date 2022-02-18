import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOwnerComponent } from './single-owner.component';

describe('SingleOwnerComponent', () => {
  let component: SingleOwnerComponent;
  let fixture: ComponentFixture<SingleOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
