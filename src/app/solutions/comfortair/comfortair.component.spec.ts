import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortairComponent } from './comfortair.component';

describe('ComfortairComponent', () => {
  let component: ComfortairComponent;
  let fixture: ComponentFixture<ComfortairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComfortairComponent]
    });
    fixture = TestBed.createComponent(ComfortairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
