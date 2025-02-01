// Commands untuk inputan pembuatan akun
Cypress.Commands.add('createAccount', (firstName, lastName, email, password) => {
    cy.visit('/customer/account/create/');
    cy.get('input[name="firstname"]').type(firstName);
    cy.get('input[name="lastname"]').type(lastName);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirmation"]').type(password);
    cy.get('button[type="submit"]').click();
});

// Commands untuk inputan login
Cypress.Commands.add('Login', (email, password) => {
    cy.visit('/customer/account/login/');
    cy.get('#email').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});


// Commands untuk inputan login yang gagal
Cypress.Commands.add('Login fail Empty Password', (email) => {
    cy.visit('/customer/account/login/');
    cy.get('#email').type(email);
    cy.get('input[name="password"]').type(' ');
    cy.get('button[type="submit"]').click();
    cy.get('#pass-error').should('have.text', 'This is a required field.');
});

// Commands untuk inputan login yang gagal
Cypress.Commands.add('Login fail Both Empty Email and Password', () => {
    cy.visit('/customer/account/login/');
    cy.get('#email').type(' ');
    cy.get('input[name="password"]').type(' ');
    cy.get('button[type="submit"]').click();
    cy.get('#email-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
    cy.get('#pass-error').should('have.text', 'This is a required field.');
});

// Commands untuk verifikasi Size dan Color yang dipilih, dan berhasil ditambahkan ke cart
Cypress.Commands.add('verifySizeAndColor', (size, color) => {
    cy.visit('/desiree-fitness-tee.html');
    
    // Pastikan elemen terlihat sebelum verifikasi
    cy.get('#option-label-size-143-item-167')
      .should('be.visible')
      .and('contain.text', size);
      
    cy.get('#option-label-color-93-item-56')
      .should('be.visible')
      .and('contain.text', color);

    cy.get('.message-success')
      .should('be.visible')
      .and('contain.text', 'You added Desiree Fitness Tee to your shopping cart.');
});



