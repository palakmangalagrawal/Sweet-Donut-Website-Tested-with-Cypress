class SweetDonutTests {
    // Test the home page
    homePage() {
      // Verify the home page loads successfully
      cy.visit('https://sweet-donut-1ca8e9.netlify.app');
      cy.url().should('eq', 'https://sweet-donut-1ca8e9.netlify.app/');

      // Nykaa logo is visible or not
      cy.get(':nth-child(1) > :nth-child(2) > a > img').should('be.visible');

      // Welcome Banner is visible or not
      cy.get('[id="Welcome_banner"]').should('be.visible')
      cy.get('[class="carousel-item"]').should('have.length', 9);

      // banner is visible or not
      cy.get('.carousel-control-prev-icon').should('be.visible');
      cy.get('[class="carousel-control-next-icon"]').should('be.visible'); 

      // images is visible or not 
      cy.get('[id="G-two"]').should('be.visible')
      cy.get('[id="G-three"]').should('be.visible')
      cy.get('[id="G-four"]').should('be.visible')

      // h1 heading is visible or not
      cy.get('h1').should('be.visible').contains('TOP BRANDS')

      // container length is greater than 5 or not
      cy.get('[id="card"]').should('have.length.greaterThan',5)

      // image is visible or not
      cy.get('img[alt="G-1"]').should('be.visible')

      // h3tag is visible or not 
      cy.get('[id="h3tag"]').contains('Upto 50% Off + Free Lipstick/Serum').should('be.visible')

      // h4tag is visible or not
      cy.get('[id="h4tag"]').contains('On Order Over Rs. 799').should('be.visible')

      // h2 heading is visible or not
      cy.get('h2').should('be.visible').contains('ONLY AT NYKAA')

      // catlogo heading is visible or not
      cy.get('[id="catlogo"]').contains('CATEGORY IN FOCUS').should('be.visible')

      // buylogo heading is visible or not
      cy.get('[id="buylogo"]').contains('BUYING GUIDE').should('be.visible')

      // checking right scrolling
      cy.get('[id="buyguide"]').scrollTo('right')

      // editable heading is visble or not
      cy.get('[id="editlable"]').contains("EDITOR'S CHOICE").should('be.visible')

      // h3 heading is visible or not
      cy.get('h3').contains('GIFT CARD').should('be.visible')

      // image is visible or not
      cy.get('img[src="https://images-static.nykaa.com/uploads/a753f5a0-58ba-4ff6-ae78-6d374e31bbcc.png?tr=w-1200,cm-pad_resize"]').should('be.visible')
      cy.get('h2').contains('POP-UP STORIES').should('be.visible')

      // checking sell banner is visible or not
      cy.get('img[src="https://images-static.nykaa.com/uploads/6dd86f98-19ac-4e60-8aae-61849054d13a.jpg?tr=w-1200,cm-pad_resize"]').should('be.visible')
      cy.get('h2').contains('SPECIAL CURATIONS').should('be.visible')

      // Alert mess image is visible or not
      cy.get('img[src="https://images-static.nykaa.com/uploads/58c1c0b0-5a0b-4614-acfc-3205e669d8a7.jpg?tr=w-1200,cm-pad_resize"]').should('be.visible')
    }

    
}
export default SweetDonutTests;