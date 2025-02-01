Cypress.Commands.add('createAccount', (firstName, lastName, email, password) => {
    cy.visit('/customer/account/create/');
    cy.get('input[name="firstname"]').type(firstName);
    cy.get('input[name="lastname"]').type(lastName);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirmation"]').type(password);
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('Login', (email, password) => {
    cy.visit('/customer/account/login/');
    cy.get('#email').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});