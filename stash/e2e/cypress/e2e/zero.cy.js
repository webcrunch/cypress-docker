describe('test to go to a page outside the baseUrl', () => {
    beforeEach(() => {
        cy.visit('/')
    })


    it('remove the cookie consent', () => {
        cy.get('button').contains("Accept cookies").click()
        // cy.contains("Contact us for a product demo")
    })


    it('add the hamburger menu', () => {
        cy.get('.mobile_menu_bar').click();
        cy.get('.et_mobile_menu').should('not.have.css', 'display', 'none')
        cy.get('li a').contains("Contact")
    })

    // it('get the contact button', () => {

    // })

});