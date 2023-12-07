class LoginPage {
    // Pode ser feito por "fluxo": elementos + ações

    acessarSauceHome() {
        cy.visit('https://www.saucedemo.com/')
    }

    digitarUsuario(user) {
        cy.get('[data-test="username"]').type(user)
    }

    digitarSenha(pass) {
        cy.get('[data-test="password"]').type(pass, { log: false })
    }

    confirmarLogin() {
        cy.get('[data-test="login-button"]').click()
    }

    validarLoginComTextoDaLogo(text) {
        cy.get('.app_logo').should('have.text', text)
    }

    validarTituloDaPagina(text) {
        cy.get('.title').should('have.text', text)
    }


}

export const loginPage = new LoginPage()