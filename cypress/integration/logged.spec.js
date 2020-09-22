/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
        sessionStorage.setItem("user", JSON.stringify({ name: 'Paolo', username: 'LukeSkywa', surname: 'LukeSkywa', id: 0 }));
    })
    it('redirect to home', () => {
        cy.get('.welcome-title').should('have.text', 'Benvenuto Paolo')
    })
})