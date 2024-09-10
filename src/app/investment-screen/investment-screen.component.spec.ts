import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentScreenComponent } from './investment-screen.component';

describe('InvestmentScreenComponent', () => {
  let component: InvestmentScreenComponent;
  let fixture: ComponentFixture<InvestmentScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
