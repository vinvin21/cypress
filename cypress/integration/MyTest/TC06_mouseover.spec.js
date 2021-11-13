/// <reference  types = "Cypress" />

describe('Mouse over Test',()=>{
    it('Click on sign up link',()=>{
        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
        
    })
    it('Click on sign up link',()=>{
        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Member Login').click()

    })
    it.only('Click on sign up link',()=>{
        cy.visit('http://automationpractice.com/index.php')
       // cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('.ajax_add_to_cart_button').eq(2).click()
       
        cy.get('.cross').click()
        cy.wait(3000)
        cy.contains('Cart').trigger('mouseover')
       // cy.get('[title=View my shopping cart]').trigger('mouseover')
       // cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()
        cy.url().should('include','controller=order')

    })
})