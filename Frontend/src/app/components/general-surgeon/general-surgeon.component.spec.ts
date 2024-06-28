import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSurgeonComponent } from './general-surgeon.component';

describe('GeneralSurgeonComponent', () => {
  let component: GeneralSurgeonComponent;
  let fixture: ComponentFixture<GeneralSurgeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralSurgeonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralSurgeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
