import NavBar from '../pages/navBarPage';

describe('Navigation Bar Testing', () => {
    const navBar = new NavBar();

    beforeEach(() => {
        navBar.visit();
    });

    // Test Case 1: Hover Women Menu & Verifikasi Tops dan Bottoms
    it('TC01 - Should display Tops and Bottoms when hovering over Women menu', () => {
        navBar.hoverWomenMenu();
        navBar.verifyTopsandBottomsMenu();
    });

    // Test Case 2: Hover Tops & Verifikasi Subcategories
    it('TC02 - Should display Tops subcategories when hovering over Tops', () => {
        navBar.hoverWomenMenu();
        navBar.hoverTops();
        navBar.verifyTopsSubcategoriesVisible();
    });

    // Test Case 3: Hover Bottoms & Verifikasi Subcategories
    it('TC03 - Should display Bottoms subcategories when hovering over Bottoms', () => {
        navBar.hoverWomenMenu();
        navBar.hoverBottoms();
        navBar.verifyBottomsSubcategoriesVisible();
    });
});
