/// <reference types = "Cypress"/>

describe('Drop down Menu test',()=>{
    it('select type dropdown',()=>{
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial#')
        cy.get('#Form_submitForm_Country').select('Algeria').should('have.value','Algeria')
    })
    it('dropdown without select',()=>{
        cy.visit('https://www.google.com/')
        cy.get('input[name=q]').type('java')
       // cy.get('.G43f7e').find('li span').contains('javascript').click()
        cy.get('.G43f7e li span').contains('javascript').click()
    })
    it.only('dropdown without select',()=>{
        cy.visit('http://automationpractice.com/')
        cy.get('#search_query_top').type('dress')
       // cy.get('.G43f7e').find('li span').contains('javascript').click()
        cy.get('.ac_results li ').contains('T-shirt').click()
    })
})