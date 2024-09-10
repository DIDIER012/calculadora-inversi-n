import { CurrencyPipe } from '@angular/common';
import { Component} from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-screen',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-screen.component.html',
  styleUrl: './investment-screen.component.css'
})
export class InvestmentScreenComponent {
constructor( private investmentService: InvestmentService) {};

get results() {
  return this.investmentService.resultsData;
}
}
