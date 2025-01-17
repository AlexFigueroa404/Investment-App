import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentService} from "../investment.service";

export interface Investment {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number,
}


@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrl: './user-input.component.css'
})
export class UserInputComponent {


    calculate = output<Investment>();

    enteredInitialInvestment = signal('0')
    enteredAnnualInvestment = signal('0')
    enteredExpectedReturn = signal('5')
    enteredDuration = signal('5')


    constructor(private investmentService: InvestmentService) {

    }

    onSubmit() {

        this.investmentService.Calculate({

            initialInvestment: +this.enteredInitialInvestment(),
            duration: +this.enteredDuration(),
            expectedReturn: +this.enteredExpectedReturn(),
            annualInvestment: +this.enteredAnnualInvestment()

        });


        this.enteredInitialInvestment.set('0')
        this.enteredAnnualInvestment.set('0')
        this.enteredExpectedReturn.set('5')
        this.enteredDuration.set('5')

    }

}
