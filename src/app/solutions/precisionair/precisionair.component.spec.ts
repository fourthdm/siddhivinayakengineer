import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecisionairComponent } from './precisionair.component';

describe('PrecisionairComponent', () => {
  let component: PrecisionairComponent;
  let fixture: ComponentFixture<PrecisionairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecisionairComponent]
    });
    fixture = TestBed.createComponent(PrecisionairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
