import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { InputUserComponent } from "./input-user/input-user.component";

import { InvestmentScreenComponent } from "./investment-screen/investment-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InputUserComponent, InvestmentScreenComponent],
})
export class AppComponent {

}
