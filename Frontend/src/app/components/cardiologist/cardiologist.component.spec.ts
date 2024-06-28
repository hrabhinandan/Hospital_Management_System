import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiologistComponent } from './cardiologist.component';

describe('CardiologistComponent', () => {
  let component: CardiologistComponent;
  let fixture: ComponentFixture<CardiologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardiologistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardiologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
