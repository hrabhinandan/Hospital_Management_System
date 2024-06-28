import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDepartmentComponent } from './doctor-department.component';

describe('DoctorDepartmentComponent', () => {
  let component: DoctorDepartmentComponent;
  let fixture: ComponentFixture<DoctorDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorDepartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
