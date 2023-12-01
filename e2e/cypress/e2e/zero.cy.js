describe('test to go to a page outside the baseUrl', () => {

    describe('My First Test', () => {
        it('Does not do much!', () => {
            expect(true).to.equal(true)
            cy.screenshot()
        })
    })

    //first-visual-test.cy.js
    // describe('Cypress Visual Testing Demo', () => {
    //     it('Navigate to Browserstack home page', () => {
    //         cy.visit('https://browserstack.com')
    //         cy.compareSnapshot('home-page')
    //     })
    // })

    beforeEach(() => {
        cy.visit('/')
        cy.screenshot()
    })

    it('remove the cookie consent', () => {
        cy.get('button').contains("Accept cookies").screenshot().click()
        // cy.contains("Contact us for a product demo")
    })


    it('add the hamburger menu', () => {
        cy.get('.mobile_menu_bar').click();
        cy.screenshot()
        cy.get('.et_mobile_menu').should('not.have.css', 'display', 'none')
        cy.get('li a').contains("Contact")
    })



    // it('get the contact button', () => {

    // })

});