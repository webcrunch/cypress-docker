describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)

        // cy.screenshot()
    })

    it('test: expect true', () => {
        expect(true).to.equal(true)
    })

})



describe('test to go to a page outside the baseUrl', () => {

    beforeEach(() => {
        cy.visit('/')
    })



    //   //     //first-visual-test.cy.js
    //   //     // describe('Cypress Visual Testing Demo', () => {
    //   //     //     it('Navigate to Browserstack home page', () => {
    //   //     //         cy.visit('https://browserstack.com')
    //   //     //         cy.compareSnapshot('home-page')
    //   //     //     })
    //   //     // })




    it('remove the cookie consent', () => {
        cy.get('button').contains("Accept cookies").screenshot().click()

    })


    //   it('add the hamburger menu', () => {
    //     cy.get('.mobile_menu_bar').click();
    //     //         cy.screenshot()
    //     cy.get('.et_mobile_menu').should('not.have.css', 'display', 'none')
    //     cy.get('li a').contains("Contact")
    //   })






    //   //     // it('get the contact button', () => {

    //   //     // })

});