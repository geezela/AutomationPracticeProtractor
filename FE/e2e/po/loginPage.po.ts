import {element, by, browser} from 'protractor';
import {promise as wdpromise} from 'selenium-webdriver'

export class Login {

    private emailField = element(by.id('email'));
    private passwordField = element(by.id('passwd'));
    private signInBtn = element(by.id('SubmitLogin'));

    typeLoginEmail(email: string): void {
        this.emailField.sendKeys(email);
    }

    typeLoginPassword(password: string): void {
        this.passwordField.sendKeys(password);
    }

    clickOnSignInButton(): void {
        this.signInBtn.click();
    }
}