import LoginPage from '../pageObjects/loginPage';

describe('Login Testing', () => {
    const loginPage = new LoginPage();

    beforeEach(function () {
        cy.fixture('userlogin').then((data) => {
            this.data = data;
        });
    });

    // Test Case 1 - Login - Success
    it('Login - Success', function () {
        loginPage.navigate();
        loginPage.fillEmail(this.data.validLogin.email);
        loginPage.fillPassword(this.data.validLogin.password);
        loginPage.submit();
        cy.url().should('include', '/customer/account/');
    });

    // Test Case 2 - Login - Fail
    it('Login - Fail', function () {
        loginPage.navigate();
        loginPage.fillEmail(this.data.invalidLogin.email);
        loginPage.fillPassword(this.data.invalidLogin.password);
        loginPage.submit();
        cy.get('#email-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
    });
});