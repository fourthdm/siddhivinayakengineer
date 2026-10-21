import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingventilationComponent } from './buildingventilation.component';

describe('BuildingventilationComponent', () => {
  let component: BuildingventilationComponent;
  let fixture: ComponentFixture<BuildingventilationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingventilationComponent]
    });
    fixture = TestBed.createComponent(BuildingventilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
