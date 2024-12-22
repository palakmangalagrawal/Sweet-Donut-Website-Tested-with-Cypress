class login {
    
    // check blank signup 
    blankLogin(){
        cy.get('#account_p').click({force: true})
        cy.url().should('include','/signup')
        cy.get('[id="s_sign_number"]').click({force: true})
        cy.get('#s_register_proceed').click({force: true})
        cy.contains('ENTER A VALID MOBILE NUMBER').should('be.visible')
        cy.go('back');

    } 

    // signup with number
    getOtpFromExternalSource() {
        cy.get('#account_p').click({force: true})
        cy.get('[id="s_sign_number"]').click({force: true})
        cy.get('[placeholder="Enter Email ID or Phone Number"]').type('9876543210')
        cy.get('#s_register_proceed').click({force: true})
        cy.wait(11000)
        cy.get('[id="s_register_proceed"]').click()
    }

    // Handle the alert
     alertHandling(){
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Register Successfully');
          });
          cy.get('[id="close_alert"]').click(); 
    }

    // Fill info 
     fillInfo(){
         cy.get('[placeholder="Full Name"]').type('XYZ')
         cy.get('[placeholder="Email Address"]').type('XYZ@gmail.com')
         cy.get('[id="s_register_proceed"]').click()
         cy.url().should('eq','https://sweet-donut-1ca8e9.netlify.app/index.html')
      }
    
}
export default login;