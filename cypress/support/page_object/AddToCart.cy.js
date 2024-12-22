class Cart{
    selectProduct(){
        cy.visit('https://sweet-donut-1ca8e9.netlify.app/product.html');

        // Image should visible
        cy.get('img[alt="2"]').should('be.visible')
        cy.get('[id="ear"]').should('be.visible')
        cy.get('[id="G-real"]').should('be.visible')
        cy.get('[id="G-OFF"]').should('be.visible')

        // Rating should be visible
        cy.get('[id="rating"]').should('be.visible')

        // Add to button is vissible
        cy.get('[class="addToBagBtn"]').first().click() 

        // Back
        cy.go('back')
        cy.go('back')
    }

        addtoCart(){
            // click add to cart 
            cy.get('.topnav_container').invoke('show')
            cy.xpath('(//span[@id="shopping_bag"])[1]').click({force:true})

            // In url "bag" should
            cy.url().should('include','bag')

            // Text is visible or not
            cy.contains('Braun Hair Dryer').should('be.visible')

            // select the quantity
            cy.get('select').first().select('2');

            // Final price should be visible or not
            cy.get('[id="s_final_price"]').should('be.visible')

            // click on process button
            cy.get('[id="godj"]').click()
        }

        // select shipping address
        checkOut(){
            // Enter Country name
            cy.get('#country').type('India')

            // Enter name 
            cy.get('#name').type('XYZ')

            // Enter Phone number
            cy.get('#phone').type('9876543210')

            // Enter Postal Code
            cy.get('#postal').type(452001)

            // Enter Address
            cy.get(':nth-child(6) > #address').type('Manorama Ganj , Indore')
            cy.get('#submit').click()

         // select payment method
            cy.get('#paymentMethod > :nth-child(5)').click();
            cy.get('#submit').click()

         // enter otp
            cy.get('#enterotp').type('1234')
            cy.window().then((win) => {
                win.otp = '1234'; // Mock the `otp` variable
            });

          // confirm the order 
            cy.get('#submit').click()

          // In url "success" should be 
            cy.url().should('include','sucess')
            cy.get('#btn').should('be.visible').click()
        }
}
export default Cart;