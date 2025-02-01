import ProceedToCheckout from '../pages/proceedToCheckoutPage';
import ShooppingCartPage from '../pages/shoppingCartPage';

describe('Proceed to Checkout Testing', () => {
    const proceedItem = new ProceedToCheckout();
    const shoppingCart = new ShooppingCartPage();

    beforeEach(function () {
        cy.fixture('shippingEmail').then((data) => {
            this.data = data;
        });
    });

    it('TC01 - fill Address Shipping data', function ()  {
        // Step 1 : Tambahkan item ke cart
        shoppingCart.visit();
        shoppingCart.chooseSizeSmall('S');
        shoppingCart.chooseOptionColor('Orange');
        shoppingCart.addToCart();
        shoppingCart.proceedToCheckout();
        // Step 2 : Isi data alamat pengiriman
        proceedItem.navigate();
        proceedItem.fillemailShipping(this.data.shippingEmail.email);
        proceedItem.fillpasswordShipping(this.data.shippingEmail.password);
        proceedItem.clickloginShipping();
        proceedItem.fillCompanyName(this.data.shippingAddress.company);
        proceedItem.fillStreetAddress(
            this.data.shippingAddress.streetAddress1,
            this.data.shippingAddress.streetAddress2,
            this.data.shippingAddress.streetAddress3
        );
        proceedItem.fillCity(this.data.city.city);
        proceedItem.selectState(this.data.city.state);
        proceedItem.fillZipCode(this.data.city.zipCode);
        proceedItem.fillCountry(this.data.city.country);
        proceedItem.fillPhoneNumber(this.data.phoneNumber.phoneNumber);
        proceedItem.shippingMethods();
        proceedItem.nextButton();
        proceedItem.verifyPayment();
        //proceedItem.myBillingAddress();
        proceedItem.placeOrderButton();
        proceedItem.successPurchase();

    });

});