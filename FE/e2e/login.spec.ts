import {browser, by, element, protractor} from "protractor";
import {Login} from "./po/loginPage.po";
import {Header} from "./po/header.po";

describe('Login page:', () => {

let login: Login;
let header: Header;

    describe('user should be able to log in, ', () => {

        beforeAll(() => {
            login = new Login();
            header = new Header();
            browser.waitForAngularEnabled(false);
            browser.get('http://automationpractice.com');
            header.clickOnSignInLink();
        });

        it('user should be able to put login: ', () => {
            login.typeLoginEmail("automation@testing.pl");
        });

        it('user should be able to put password: ', () => {
            login.typeLoginPassword("abcd1234");
        });

        it('user should be able to click button log in: ', () => {
            login.clickOnSignInButton();
        });        
        });
});

