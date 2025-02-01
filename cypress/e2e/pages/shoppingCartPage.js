class ShoppingCartPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/desiree-fitness-tee.html');
    }

    chooseSizeSmall() {
        cy.wait(2000); // Memberi waktu untuk memastikan elemen siap
        cy.get('#option-label-size-143-item-167')
          .should('be.visible') // Pastikan elemen terlihat sebelum diklik
          .click();
    }

    chooseOptionColor() {
        cy.wait(2000); // Memberi waktu untuk memastikan elemen siap
        cy.get('#option-label-color-93-item-56')
          .should('be.visible') // Pastikan elemen terlihat sebelum diklik
          .click();
    }

    addToCart() {
        cy.get('#product-addtocart-button')
          .should('be.visible') // Pastikan tombol terlihat sebelum diklik
          .click();

        // Verifikasi produk berhasil ditambahkan ke cart
        cy.get('.message-success')
          .should('be.visible')
          .and('contain.text', 'You added Desiree Fitness Tee to your shopping cart.');
    }

    proceedToCheckout() {
        cy.get('.showcart > .counter').click();
    }

    verifyCart(item, subtotal) {
        cy.get('.showcart > .counter')
          .should('be.visible')
          .and('contain.text', item);
        cy.get('.amount > .price-wrapper > .price')
          .should('be.visible')
          .and('contain.text', subtotal);
    }
}

export default ShoppingCartPage;
