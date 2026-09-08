import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewanimationComponent } from './newanimation.component';

describe('NewanimationComponent', () => {
  let component: NewanimationComponent;
  let fixture: ComponentFixture<NewanimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewanimationComponent]
    });
    fixture = TestBed.createComponent(NewanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
