import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsMetricsComponent } from './trips-metrics.component';

describe('TripsMetricsComponent', () => {
  let component: TripsMetricsComponent;
  let fixture: ComponentFixture<TripsMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsMetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
