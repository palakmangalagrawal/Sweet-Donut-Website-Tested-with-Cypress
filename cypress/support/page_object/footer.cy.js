class Footerlink{
    Footer(){
        cy.visit('https://sweet-donut-1ca8e9.netlify.app');

      cy.contains('Contact Us').should('be.visible');
      cy.contains('Frequently asked questions').should('be.visible');
      cy.contains('Store Locator').should('be.visible');
      cy.contains('Cancellation & Return').should('be.visible');
      cy.contains('Shipping & Delivery').should('be.visible');
      cy.contains(' Get special discount on your inbox').should('be.visible');
      cy.get('[placeholder="Your Email"]').type("xyz@gmail.com");
      cy.contains('SEND').click();
    }

    NYKAA(){
        cy.contains('Who are we?').should('be.visible').click()
        cy.contains('Careers').should('be.visible').click()
        cy.contains('Authenticity').should('be.visible').click()
        cy.contains('Testimonials').should('be.visible').click()
        cy.contains('Nykaa CSR').should('be.visible').click()
        cy.contains('Responsible Disclosure').should('be.visible').click()
        cy.contains('Investor Relations').should('be.visible').click()
    }

    InspireMe(){
        cy.contains('Beauty Book').should('be.visible').click()
        cy.contains('Nykaa TV').should('be.visible').click()
        cy.contains('Buying Guides').should('be.visible').click()
   }

   OuickLinks(){
    cy.contains('Offer Zone').should('be.visible').click()
    cy.contains('Nykaa Man').should('be.visible').click()
    cy.contains('Nykaa Pro').should('be.visible').click()
    cy.contains('Nykaa femina beauty awards winners 2019').should('be.visible').click()
    cy.contains('Sitemap').should('be.visible').click()
  }

   privacy(){
    cy.get('[id="pink1"]').contains('Terms & Conditions').should('be.visible')
    cy.get('[id="pink1"]').contains('Shipping Policy').should('be.visible')
    cy.get('[id="pink1"]').contains('Cancellation Policy').should('be.visible')
    cy.get('[id="pink1"]').contains('Privacy Policy').should('be.visible')

   }
}
export default Footerlink ;