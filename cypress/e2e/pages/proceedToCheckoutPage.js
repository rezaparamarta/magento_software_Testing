class ProceedToCheckout {
    navigate() {
        cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
    }

    fillemailShipping(email) {
        cy.get('#customer-email').type(email);
    }

    fillpasswordShipping(password) {
        cy.get('#customer-password').type(password);
    }

    clickloginShipping() {
        cy.get('#customer-email-fieldset > .fieldset > .actions-toolbar > div.primary > .action')
        .should('be.visible')
        .click();
        cy.wait(3000);
    }

    fillCompanyName(company) {
        cy.get('[name="shippingAddress.company"]').should('be.visible').type(company);
    }

    fillStreetAddress(streetAddress1, streetAddress2, streetAddress3) {
        cy.get('input[name="street[0]"]').should('be.visible').type(streetAddress1);
        cy.get('input[name="street[1]"]').should('be.visible').type(streetAddress2);
        cy.get('input[name="street[2]"]').should('be.visible').type(streetAddress3);

    }

    fillCity(city) {
        cy.get('input[name="city"]').should('be.visible').type(city);
    }

    selectState(stateName) {
        // Pilih dropdown berdasarkan nama, dan pilih opsi berdasarkan teks
        cy.get('select[name="region_id"]')  // Dropdown berdasarkan nama
            .should('be.visible')  // Pastikan elemen terlihat
            .select(stateName);  // Pilih berdasarkan teks (misalnya 'Alabama')
        cy.wait(1000);
    }

    fillZipCode(zipCode) {
        cy.get('[name="shippingAddress.postcode"]').should('be.visible').type(zipCode);
    }

    fillCountry(country) {
        cy.get('select[name="country_id"]')
            .should('be.visible')
            .select(country);
    }

    fillPhoneNumber(phoneNumber) {
        cy.get('[name="shippingAddress.telephone"]')
            .should('be.visible')
            .type(phoneNumber);
        cy.wait(1000);
    }

    shippingMethods() {
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click();
    }

    nextButton() {
        cy.get('.button').click();
        cy.wait(2000);
    }

    verifyPayment() {
        cy.get('.opc-block-summary').should('be.visible').and('contain.text', 'Order Summary');
        cy.get('.payment-group > .step-title').should('be.visible').and('contain.text', 'Payment Method');
    }

    /*myBillingAddress() {
        cy.get('.billing-address-same-as-shipping-block').click();
    }*/

    placeOrderButton() {
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
        cy.wait(2000);
    }

    successPurchase() {
        cy.get('.base').should('be.visible').and('contain.text', 'Thank you for your purchase!');
        cy.get('.checkout-success > :nth-child(1)').should('be.visible');
        cy.get('.checkout-success > .actions-toolbar > div.primary > .action').should('be.visible');

    }


    
}

export default ProceedToCheckout;