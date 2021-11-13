/// <reference  types = "Cypress" />

describe('Amazon search test',()=>{
    it('search test',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('.nav-search-field ').within(()=>{
            cy.get('#twotabsearchtextbox').type('Apple Mac Book Laptop')
            cy.get('#nav-search-submit-button').click()
        })
    })
})