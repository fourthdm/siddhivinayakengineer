import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrvComponent } from './vrv.component';

describe('VrvComponent', () => {
  let component: VrvComponent;
  let fixture: ComponentFixture<VrvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VrvComponent]
    });
    fixture = TestBed.createComponent(VrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
