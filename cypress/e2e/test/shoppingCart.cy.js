import ShoppingCartPage from '../pages/shoppingCartPage';

describe('Shopping Cart Testing', () => {
    const shoppingCart = new ShoppingCartPage();

    beforeEach(() => {
        // Mengabaikan error JavaScript dari Magento
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Mencegah Cypress gagal karena error eksternal
        });

        shoppingCart.visit();
    });

    it('TC01 - Choose Size, Choose Color, and Add to Cart', () => {
        shoppingCart.chooseSizeSmall('S');
        shoppingCart.chooseOptionColor('Orange');
        shoppingCart.addToCart();
        shoppingCart.proceedToCheckout();
        shoppingCart.verifyCart('1', '$24.00');
    });
});
