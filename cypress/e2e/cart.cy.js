describe('Carrito Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    it('Agregar un producto al carrito',()=>{

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

})
    it('TC_11.0 - Agregar múltiples productos y verificar contador',()=>{
    
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
})

it('TC_12.0 - Eliminar un producto desde la página del carrito',()=>{

    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="remove-sauce-labs-onesie"]').click()
})
    })

