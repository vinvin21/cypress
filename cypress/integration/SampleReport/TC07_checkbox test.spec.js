/// <reference types = "Cypress" />

describe('Check box test',()=>{
    it('check and uncheck playing',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Women').click()
        //check the checkbox and verify them
        cy.get('.checkbox').check().parent().should('have.class','checked')
        // uncheck the checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
    })
    it.only('check and uncheck playing',()=>{
        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('laptop')
        cy.contains('Search').click()
        //check the checkbox and verify them
        //Sometimes assertion not working in the same line because of the DOM element changed than write the assertion on new line
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force:true})
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('have.checked','checked')
         // uncheck the checkboxes and verify them
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').uncheck({force:true})
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('not.have.checked','checked')
        
    })
})