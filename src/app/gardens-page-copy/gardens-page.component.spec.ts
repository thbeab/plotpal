import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardensPageComponent } from './gardens-page.component';

describe('GardensPageComponent', () => {
  let component: GardensPageComponent;
  let fixture: ComponentFixture<GardensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardensPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
