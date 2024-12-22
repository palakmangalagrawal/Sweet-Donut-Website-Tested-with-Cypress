class Nav{
    navigation(){
        cy.visit("https://sweet-donut-1ca8e9.netlify.app/")
            cy.get('.threeDots > .material-symbols-outlined').should('be.visible').click()

            cy.get('p').should('contain.text', 'Brand').should('be.visible')

            cy.get('p').should('contain.text', 'Luxe').should('be.visible')
       
             cy.get('[id="NykaaFashion"]').click({force : true})

             cy.get('.topnav_container').invoke('show'); // Force show the parent container

            cy.get('.material-symbols-outlined').contains('phone_iphone').click({ force: true }); 

            cy.get('p').should('contain.text', 'Get App').should('be.visible')

            cy.get('span').should('contain.text', 'location_on').should('be.visible')

            cy.get('p').should('contain.text', 'Store & Events').should('be.visible')

            cy.get('span').should('contain.text', 'redeem').should('be.visible')

            cy.get('p').should('contain.text', 'Gift Card').should('be.visible')

            cy.get('span').should('contain.text', 'help').should('be.visible')
            
            cy.get('p').should('contain.text','BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals').should('be.visible')



    }
}
export default Nav ;