import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentsListComponent } from './appointments-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('AppointmentsListComponent', () => {
  let component: AppointmentsListComponent;
  let fixture: ComponentFixture<AppointmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsListComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  });
});
