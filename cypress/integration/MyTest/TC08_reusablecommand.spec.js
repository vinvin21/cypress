/// <reference types ="Cypress" />

describe('Automation practice',()=>{
    before(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.login('vinkhalas@yahoo.com' , 'Test@123') 
    })
    it('sign in command',()=>{
       cy.url().should('include','controller=my-account')
       cy.get('.myaccount-link-list').should('have.length',2)
    })
    it('Should navigate  to home page',()=>{
       
       cy.get('.icon-chevron-left').last().click()
    })
    it('should search',()=>{
       cy.search('dress')
       cy.get('.lighter').should('contain','dress')
    })
})