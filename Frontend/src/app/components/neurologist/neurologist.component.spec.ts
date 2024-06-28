import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologistComponent } from './neurologist.component';

describe('NeurologistComponent', () => {
  let component: NeurologistComponent;
  let fixture: ComponentFixture<NeurologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeurologistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeurologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
