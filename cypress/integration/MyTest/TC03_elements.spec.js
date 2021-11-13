/// <reference types = "Cypress" />

describe('check element get concept',()=>{
    it('element get testing',()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        cy.url().should('include','customers')
        cy.get('ul.footer-nav li').should('have.length',26)
        cy.get('ul.footer-nav li').find("a[href*='footer']").should('have.length',5)

    })
})