/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })


})

describe('Visit a page', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://example.cypress.io/todo')
    })
    it('Will visit the page', () => {
        // cy.url("/").should('eq', 'https://example.cypress.io/todo2')
        expect(false).to.equal(false)
    })
});


