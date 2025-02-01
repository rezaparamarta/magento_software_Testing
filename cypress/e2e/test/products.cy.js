import ProductsPage from '../pages/productsPage';

describe('Products Testing', () => {
    const products = new ProductsPage();

    beforeEach(() => {
        products.visit();
    });
    
    // Test Case 1: Verifikasi Title dan Price
    it('TC01 - Should display product title and price', () => {
        products.verifyTitleAndPrice();
    });

    // Test Case 2: Verifikasi Reviews Summary
    it('TC02 - Should display product reviews summary', () => {
        products.verifyReviewsSummary();
    });

    // Test Case 3: Verifikasi Sizes dan Colors
    it('TC03 - Should display product sizes and colors', () => {
        products.verifySizesAndColors();
    });
});