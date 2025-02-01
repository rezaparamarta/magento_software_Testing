import CreateAccountPage from '../pageObjects/createAccountPage';

describe('Create account Testing', () => {
    const createAccountPage = new CreateAccountPage();
    let usermail;

    function randomEmail() {
        const randomString = Math.random().toString(36).substring(2, 15);
        return `${randomString}@testing.com`;
    }

    beforeEach(function () {
        cy.fixture('user').then((data) => {
            this.data = data;
        });
        usermail = randomEmail();
    });

    // Test Case 1 - Create A New Account - Success
    it('Create A New Account - Success', function () {
        createAccountPage.navigate();
        createAccountPage.fillFirstName(this.data.validUser.firstName);
        createAccountPage.fillLastName(this.data.validUser.lastName);
        createAccountPage.fillEmail(usermail);
        createAccountPage.fillPassword(this.data.validUser.password);
        createAccountPage.fillConfirmPassword(this.data.validUser.password);
        createAccountPage.submit();
        cy.contains('Thank you for registering with Main Website Store.');
    });

    // Test Case 2 - Create A New Account - Fail
    it('Create A New Account - Fail', function () {
        createAccountPage.navigate();
        createAccountPage.fillFirstName(this.data.invalidUser.firstName);
        createAccountPage.fillLastName(this.data.invalidUser.lastName);
        createAccountPage.fillEmail(usermail);
        createAccountPage.fillPassword(this.data.invalidUser.password);
        createAccountPage.fillConfirmPassword(this.data.invalidUser.password);
        createAccountPage.submit();
        cy.url().should('include', '/customer/account/');
    });
});