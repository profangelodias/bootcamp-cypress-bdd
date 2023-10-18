/// <reference types="cypress" />
const users = require('../../fixtures/users.json')

context('Acesso a página de login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // afterEach(() => {
    //     cy.clearAllSessionStorage({ log: true })
    //     cy.screenshot()
    // })
    //only para executar apenas ele
    it('login válido', () => {
        // cy.visit('https://www.saucedemo.com/')
        //Mostrar com elemento que não existe.
        // cy.get('[data-test="username_"]').type('standard_user')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //Validação pode ser qualquer coisa "única" que valide
        cy.get('.app_logo').should('have.text', 'Swag Labs')
        cy.get('.app_logo').should('contain', 'Swag')
        // cy.clearLocalStorage()

    })

    it('login válido - usando arquivo de dados', () => {
        cy.get('[data-test="username"]').type(users.user)
        cy.get('[data-test="password"]').type(users.password)
        cy.get('[data-test="login-button"]').click()
        cy.get('.app_logo').should('have.text', 'Swag Labs')
        cy.get('.app_logo').should('contain', 'Swag')
    })

    it('login válido - fixtures', () => {
        cy.fixture('users').then(dados => {
            cy.get('[data-test="username"]').type(dados.user)
            cy.get('[data-test="password"]').type(dados.password)
            cy.get('[data-test="login-button"]').click()
            cy.get('.app_logo').should('have.text', 'Swag Labs')
            cy.get('.app_logo').should('contain', 'Swag')
        })
    })
})
