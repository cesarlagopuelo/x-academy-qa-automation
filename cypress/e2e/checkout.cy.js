describe('Checkout Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('TC_13.0 - Completar checkout con datos válidos',()=>{
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

cy.get('[data-test="shopping-cart-link"]').click()

cy.get('[data-test="checkout"]').click()

cy.get('[data-test="firstName"]').type('Cesar')
cy.get('[data-test="lastName"]').type('Alvarez')
cy.get('[data-test="postalCode"]').type('7220')

cy.get('[data-test="continue"]').click()


    })
it('TC_14.0 - Checkout sin completar datos obligatorios',()=>{
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

cy.get('[data-test="shopping-cart-link"]').click()

cy.get('[data-test="checkout"]').click()

cy.get('[data-test="continue"]').click()
cy.get('[data-test="error"]')
.should('be.visible')
.and('contain','First Name is required')
})
})