import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageCardsComponent } from './package-cards.component';

describe('PackageCardsComponent', () => {
  let component: PackageCardsComponent;
  let fixture: ComponentFixture<PackageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
