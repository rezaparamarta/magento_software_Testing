class ProductsPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/women/tops-women/tees-women.html');
    }

    verifyTitleAndPrice() {
        cy.get('.product-item-name > .product-item-link').should('contain.text', 'Desiree Fitness Tee');
        cy.get('#product-price-1588 > .price').should('contain.text', '$24.00');
    }

    verifyReviewsSummary() {
        cy.get(':nth-child(1) > .product-item-info > .details > .product-reviews-summary').should('be.visible');
    }

    verifySizesAndColors() {
        cy.get('.swatch-opt-1540 > .size > .swatch-attribute-options').should('be.visible');
        cy.get('.swatch-opt-1540 > .swatch-attribute.color > .swatch-attribute-options').should('be.visible');
    }
}

export default ProductsPage;