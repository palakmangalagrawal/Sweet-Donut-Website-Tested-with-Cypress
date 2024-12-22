class search{
    searchProducts() {
        cy.visit('https://sweet-donut-1ca8e9.netlify.app');
        // Verify the search bar is functional
        cy.get('[placeholder="Search  products, brands etc"]').should('be.visible').type('Kajal');
        cy.get('[class="carousel-item"]').should('have.length', 9);
      }
      emptySearch() {
        cy.visit('https://sweet-donut-1ca8e9.netlify.app');
        // Submit an empty search
        cy.get('[placeholder="Search  products, brands etc"]').type('{enter}');
        // Verify the page does not redirect to a results page
        cy.url().should('eq', 'https://sweet-donut-1ca8e9.netlify.app/?');

      }
}
export default search ;