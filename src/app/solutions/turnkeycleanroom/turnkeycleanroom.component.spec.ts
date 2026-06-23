import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnkeycleanroomComponent } from './turnkeycleanroom.component';

describe('TurnkeycleanroomComponent', () => {
  let component: TurnkeycleanroomComponent;
  let fixture: ComponentFixture<TurnkeycleanroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnkeycleanroomComponent]
    });
    fixture = TestBed.createComponent(TurnkeycleanroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
