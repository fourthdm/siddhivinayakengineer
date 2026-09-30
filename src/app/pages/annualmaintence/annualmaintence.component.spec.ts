import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualmaintenceComponent } from './annualmaintence.component';

describe('AnnualmaintenceComponent', () => {
  let component: AnnualmaintenceComponent;
  let fixture: ComponentFixture<AnnualmaintenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualmaintenceComponent]
    });
    fixture = TestBed.createComponent(AnnualmaintenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
