/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Acesso a página de login com describe', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // afterEach(() => {
    //     cy.clearAllSessionStorage({ log: true })
    //     cy.screenshot()
    // })
    //only para executar apenas ele
    it.only('login válido', () => {
        // cy.visit('https://www.saucedemo.com/')
        //Mostrar com elemento que não existe.
        // cy.get('[data-test="username_"]').type('standard_user')
        // cy.get('[data-test="username"]').type('standard_user')
        //usando o faker
        cy.get('[data-test="username"]').type(faker.internet.email())
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //Validação pode ser qualquer coisa "única" que valide
        cy.get('.app_logo').should('have.text', 'Swag Labs')
        cy.get('.app_logo').should('contain', 'Swag')
        // cy.clearLocalStorage()

    })
})
