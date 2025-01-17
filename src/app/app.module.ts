import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {InvestmentResultComponent} from "./investment-result/investment-result.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {CurrencyPipe} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    bootstrap: [AppComponent],
    imports: [FormsModule, FormsModule, CurrencyPipe, BrowserModule],
    declarations: [AppComponent,HeaderComponent,InvestmentResultComponent, UserInputComponent]
})
export class AppModule {
}
