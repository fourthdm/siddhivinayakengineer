import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutioncardComponent } from './solutioncard.component';

describe('SolutioncardComponent', () => {
  let component: SolutioncardComponent;
  let fixture: ComponentFixture<SolutioncardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutioncardComponent]
    });
    fixture = TestBed.createComponent(SolutioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
