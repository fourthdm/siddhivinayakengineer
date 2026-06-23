import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcedventilationComponent } from './forcedventilation.component';

describe('ForcedventilationComponent', () => {
  let component: ForcedventilationComponent;
  let fixture: ComponentFixture<ForcedventilationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForcedventilationComponent]
    });
    fixture = TestBed.createComponent(ForcedventilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
