import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenPageComponent } from './garden-page.component';

describe('GardenPageComponent', () => {
  let component: GardenPageComponent;
  let fixture: ComponentFixture<GardenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
