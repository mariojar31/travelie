import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoockingsComponent } from './boockings.component';

describe('BoockingsComponent', () => {
  let component: BoockingsComponent;
  let fixture: ComponentFixture<BoockingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoockingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoockingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
