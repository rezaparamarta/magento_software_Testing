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
    it('Login - Fail Wrong Email', function () {
        loginPage.navigate();
        loginPage.fillEmail(this.data.invalidLogin.email);
        loginPage.fillPassword(this.data.invalidLogin.password);
        loginPage.submit();
        cy.get('#email-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
    });

    // Test Case 3 - Login - Fail - Empty Password
    it('Login - Fail Empty Password', function () {
        loginPage.navigate();
        loginPage.fillEmail(this.data.invalidLoginEmptyPassword.email);
        loginPage.fillPassword(this.data.invalidLoginEmptyPassword.password);
        loginPage.submit();
    });

    // Test Case 4 - Login - Empty Email and Password
    it('Login - Fail Empty Both Email and Password', function () {
        loginPage.navigate();
        loginPage.fillEmail(this.data.invalidLoginEmptyEmailAndPassword.email);
        loginPage.fillPassword(this.data.invalidLoginEmptyEmailAndPassword.password);
        loginPage.submit();
    });
});