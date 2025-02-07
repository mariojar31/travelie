import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueOverviewChartComponent } from './revenue-overview-chart.component';

describe('RevenueOverviewChartComponent', () => {
  let component: RevenueOverviewChartComponent;
  let fixture: ComponentFixture<RevenueOverviewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueOverviewChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueOverviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
