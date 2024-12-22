class Product{
    pro(){
      cy.visit('https://sweet-donut-1ca8e9.netlify.app/product.html')

      // All product text should be visible
      cy.get('[id="G-lable"]').contains('ALL PRODUCTS').should('be.visible')

      // Select the sorttag
      cy.get('[id="sortTag"]').select('Discount')

      // Select category
      cy.get('[id="categoryTag"]').select('Hair Styling Tools')

      //Product image should be visible 
      cy.get('img[alt="3"]').should('be.visible')

      // Product name should visible 
      cy.get('[id="G-des"]').contains('Dyson Airwrap Styler').should('be.visible')

      // Price should visible 
      cy.get('[id="price"]').should('be.visible')

      // Mrp price should visible 
      cy.get('[id="ear"]').contains('₹49999').should('be.visible')

      // price with 8 percent should visible
      cy.get('[id="G-real"]').contains('₹45999').should('be.visible')

      // off percent should visible
      cy.get('[id="G-OFF"]').contains('8% Off').should('be.visible')

      // rating should visible
      cy.get('[id="rating"]').should('be.visible')

      // wishlist sign should visible
      cy.get('[id="heart"]').should('be.visible')

      // Add to bag heading should visible
      cy.get('h5').contains('Add to Bag').should('be.visible')


      // Another Product checking
      cy.get('[id="G-img"]').should('be.visible')

      // product name should visible
      cy.get('[id="G-des"]').contains('Philips Electric Shaver').should('be.visible')

      // price should visible
      cy.get('[id="price"]').should('be.visible')

      // price should visible
      cy.get('[id="ear"]').contains('₹2999').should('be.visible')

      // 10 percent off price should visible
      cy.get('[id="G-real"]').contains('₹2699').should('be.visible')

      // off percent should visible
      cy.get('[id="G-OFF"]').contains('10% Off').should('be.visible')

      // rating should visible
      cy.get('[id="rating"]').should('be.visible')

      // wishlish sign should visible
      cy.get('[id="heart"]').should('be.visible')

      //add to bag heading should visible 
      cy.get('h5').contains('Add to Bag').should('be.visible')
    }
}
export default Product;