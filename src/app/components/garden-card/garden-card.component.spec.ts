import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCardComponent } from './garden-card.component';

describe('GardenCardComponent', () => {
  let component: GardenCardComponent;
  let fixture: ComponentFixture<GardenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
