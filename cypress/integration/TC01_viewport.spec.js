///  <reference types = "Cypress" />

describe('Testing different viewport',()=>{
    before(()=>{
        console.log("Running my tests")
    })
    beforeEach(()=>{
        cy.visit('https://www.google.com/')
    })
    it('open in macbook-13',()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })
    it('open in macbook-15',()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone-10',()=>{
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in ipad-2',()=>{
        cy.viewport('ipad-2')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in macbook-13',()=>{
        cy.viewport(1280,800)
        cy.screenshot()
        cy.wait(200)
    })


})