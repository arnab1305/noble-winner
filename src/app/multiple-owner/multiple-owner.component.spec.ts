import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOwnerComponent } from './multiple-owner.component';

describe('MultipleOwnerComponent', () => {
  let component: MultipleOwnerComponent;
  let fixture: ComponentFixture<MultipleOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
