import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricscardsComponent } from './metricscards.component';

describe('MetricscardsComponent', () => {
  let component: MetricscardsComponent;
  let fixture: ComponentFixture<MetricscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricscardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
