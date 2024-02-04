import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotCardComponent } from './plot-card.component';

describe('PlotCardComponent', () => {
  let component: PlotCardComponent;
  let fixture: ComponentFixture<PlotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
