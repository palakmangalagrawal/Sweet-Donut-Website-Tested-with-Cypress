import SweetDonutTests from "../../support/page_object/homepage.cy";
import search from "../../support/page_object/searchbar.cy";
import Footerlink from "../../support/page_object/footer.cy";
import Nav from "../../support/page_object/Navigation.cy";
import login from "../../support/page_object/Login.cy";
import Cart from "../../support/page_object/AddToCart.cy";
import Product from "../../support/page_object/product.cy";


Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test
    if (err.message.includes('Failed to fetch')) {
      return false; // This prevents the test from failing
    }
  });
  
  //  Ignore errors with specific messages
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of null (reading 'length')")) {
        return false; // Prevent Cypress from failing the test
    }
});

describe('Verify the Sweet donut website', () => {
    beforeEach(() => {
        cy.visit('https://sweet-donut-1ca8e9.netlify.app/'); 
      });
    const ans = new SweetDonutTests();
    it('verify the homepage', () => {
        ans.homePage();
    });

    it('verify the searchbar', () => {
        const searchbar = new search();
        searchbar.searchProducts();
        searchbar.emptySearch();
    });

    it('verify the footerlinks',()=>{
        const footer = new Footerlink();
        footer.Footer();
        footer.NYKAA();
        footer.InspireMe();
        footer.OuickLinks();
        footer.privacy();
    }) 


    it('verify the Navigation link',() =>{
        const nav = new Nav();
         nav.navigation();

    })

    it('verify the Login functionality', () => {
        const log = new login();
        log.blankLogin();
        log.getOtpFromExternalSource();
        log.alertHandling();
        log.fillInfo();
    }); 

    it('verify addtocart process', () => {
        const add = new Cart();
        add.selectProduct();
        add.addtoCart();
        add.checkOut();
    });

    it('Checking Product with category', () => {
        const prod = new Product();
        prod.pro();
    });
});