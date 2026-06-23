import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaporativeComponent } from './evaporative.component';

describe('EvaporativeComponent', () => {
  let component: EvaporativeComponent;
  let fixture: ComponentFixture<EvaporativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaporativeComponent]
    });
    fixture = TestBed.createComponent(EvaporativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
