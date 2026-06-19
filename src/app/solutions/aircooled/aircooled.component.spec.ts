import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircooledComponent } from './aircooled.component';

describe('AircooledComponent', () => {
  let component: AircooledComponent;
  let fixture: ComponentFixture<AircooledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AircooledComponent]
    });
    fixture = TestBed.createComponent(AircooledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
