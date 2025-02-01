class CreateAccountPage {
    navigate() {
        cy.visit('/customer/account/create/');
    }

    fillFirstName(firstName) {
        cy.get('input[name="firstname"]').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('input[name="lastname"]').type(lastName);
    }

    fillEmail(email) {
        cy.get('input[name="email"]').type(email);
    }

    fillPassword(password) {
        cy.get('#password').type(password)
        .should('be.visible')
        .clear()
        .type(password);
        
    }

    fillConfirmPassword(confirmPassword) {
        cy.get('#password-confirmation').type(confirmPassword);
    }

    submit() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    }
}

export default CreateAccountPage;