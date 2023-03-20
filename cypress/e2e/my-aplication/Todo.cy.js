/// <reference types="cypress" />


describe('TodoApp', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/todo')
    })

    it('adicionar item', () => {
        cy.get('.input-todo').type('Testando Cypress')
        cy.get('.input-todo').should('have.value', 'Testando Cypr')
        cy.contains('Adicionar Todo').click()

        cy.get('li').should('have.text', 'Testando Cypress')
    })
})