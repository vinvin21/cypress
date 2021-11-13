/// <reference types = "Cypress"

describe('Hubspot page future',()=>{
    it('handle the hub spot login test',()=>{
        cy.visit('https://app.hubspot.com/login',{timeout:11000,failOnStatusCode: false})
        cy.wait(10000)
        cy.get('#username').type('naveen@gmail.com')
        cy.get('#password').type('naveen@g123')
        cy.get('#loginBtn').click()
       })
})