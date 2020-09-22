/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
        sessionStorage.removeItem("user");
    })
    let baseUrl = "http://localhost:3000/";
    it('submit login', () => {
        cy.get('.username-input input').type('LukeSkywa').should('have.value', 'LukeSkywa');
        cy.get('.password-input input').type('asd').should('have.value', 'asd');

        cy.server();
        cy.route('GET', baseUrl + 'users?username=LukeSkywa').as('LoginCall');
        cy.get('.login-button').click();
        cy.wait('@LoginCall').then(() => {
            cy.get('.welcome-title').should('have.text', 'Benvenuto Luca')

            cy.get('.goToTodoLink').click()
            cy.get('.todosHomeTitle').should('have.text', "I miei TODO")
        })
    })
})