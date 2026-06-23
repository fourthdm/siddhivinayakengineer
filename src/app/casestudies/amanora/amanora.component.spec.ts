import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanoraComponent } from './amanora.component';

describe('AmanoraComponent', () => {
  let component: AmanoraComponent;
  let fixture: ComponentFixture<AmanoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmanoraComponent]
    });
    fixture = TestBed.createComponent(AmanoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
