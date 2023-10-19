/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from '../../pages/login.page';
const users = require('../../fixtures/login.json')


Given("que eu acesse a página de autenticação do saucedemo", () => {
    loginPage.acessarSauceHome()
})

When("eu digitar o usuário {string}", (usuario) => {
    loginPage.digitarUsuario(usuario)
})

And("a senha {string}", (password) => {
    loginPage.digitarSenha(password)
})

And("confirmar login", () => {
    loginPage.confirmarLogin()
})

Then("deve ser exibida a logo do {string}", (text) => {
    loginPage.validarLoginComTextoDaLogo(text)
})