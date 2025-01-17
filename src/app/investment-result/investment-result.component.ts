import {Component, inject} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../investment.service";

@Component({
    selector: 'app-investment-result',
    templateUrl: './investment-result.component.html',
    styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {


    private investmentService = inject(InvestmentService);

    get results() {
        return this.investmentService.results;
    }


    // results = input<{
    //     year: number;
    //     interest: number;
    //     valueEndOfYear: number;
    //     annualInvestment: number;
    //     totalInterest: number;
    //     totalAmountInvested: number
    // }[]>();

}
