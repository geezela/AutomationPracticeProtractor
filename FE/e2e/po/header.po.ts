import {element, by, browser} from 'protractor';
import {promise as wdpromise} from 'selenium-webdriver'

export class Header {

    private signInLink = element(by.css('.login'));
    private accountName = element(by.css('.account'));

    clickOnSignInLink(): void {
        this.signInLink.click();
    }
}