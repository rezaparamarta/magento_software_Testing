class LoginPage {
    navigate() {
        cy.visit('/customer/account/login/');
    }

    fillEmail(email) {
        cy.get('#email').type(email);
    }

    fillPassword(password) {
        cy.get('#pass').type(password);
    }

    submit() {
        cy.get('#send2').click();
    }
}

export default LoginPage;