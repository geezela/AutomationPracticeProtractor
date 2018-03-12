import { browser, by, element, protractor } from "protractor";
import { Login } from "./po/loginPage.po";
import { Header } from "./po/header.po";

describe('Login page:', () => {

    let login: Login;
    let header: Header;
    const CURRENT_EMAIL = "automation@testing.pl",
        CURRENT_PASSWORD = "abcd1234";

    describe(`user should be able to log in, `, () => {

        beforeAll(() => {
            login = new Login();
            header = new Header();
            browser.waitForAngularEnabled(false);
            browser.get('http://automationpractice.com');
            header.clickOnSignInLink();
        });

        it(`user should be able login using credentials:${CURRENT_EMAIL}, ${CURRENT_PASSWORD} `, () => {
            login.typeLoginEmail(CURRENT_EMAIL);
            login.typeLoginPassword(CURRENT_PASSWORD);
            login.clickOnSignInButton();

        });
    });
});

