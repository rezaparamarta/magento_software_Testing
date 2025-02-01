class NavBar {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/women.html');
    }

    hoverWomenMenu() {
        cy.get('#ui-id-4 > :nth-child(2)').trigger('mouseover');
    }

    verifyTopsandBottomsMenu() {
        cy.contains('Tops').should('be.visible');
        cy.contains('Bottoms').should('be.visible');
    }

    hoverTops() {
        cy.contains('Tops').trigger('mouseover');
    }

    verifyTopsSubcategoriesVisible() {
        cy.contains('Jackets').should('be.visible');
        cy.contains('Hoodies & Sweatshirts').should('be.visible');
        cy.contains('Tees').should('be.visible');
        cy.contains('Bras & Tanks').should('be.visible');
    }

    hoverBottoms() {
        cy.contains('Bottoms').trigger('mouseover');
    }

    verifyBottomsSubcategoriesVisible() {
        cy.contains('Pants').should('be.visible');
        cy.contains('Shorts').should('be.visible');
    }
}

export default NavBar;
