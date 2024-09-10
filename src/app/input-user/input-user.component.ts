import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-input-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-user.component.html',
  styleUrl: './input-user.component.css'
})


export class InputUserComponent {

  enteredInitial = signal('0');
  enteredAnnual = signal('0');
  enteredExpetedReturn = signal('5');
  enteredDuration= signal('10');
  
  constructor(private investmentService: InvestmentService){}
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitial(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpetedReturn(),
      annualInvestment: +this.enteredAnnual()
    });
    this.enteredInitial.set("0");
    this.enteredAnnual.set("0");
    this.enteredExpetedReturn.set("5");
    this.enteredDuration.set("10");
  }
}
