import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDestinationsChartComponent } from './top-destinations-chart.component';

describe('TopDestinationsChartComponent', () => {
  let component: TopDestinationsChartComponent;
  let fixture: ComponentFixture<TopDestinationsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopDestinationsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDestinationsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
