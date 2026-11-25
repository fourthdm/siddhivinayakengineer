import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacvitoutsComponent } from './hvacvitouts.component';

describe('HvacvitoutsComponent', () => {
  let component: HvacvitoutsComponent;
  let fixture: ComponentFixture<HvacvitoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HvacvitoutsComponent]
    });
    fixture = TestBed.createComponent(HvacvitoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
