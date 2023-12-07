#language: pt
Funcionalidade: Login no Swag Labs

Contexto:
Dado que eu acesse a página de autenticação do saucedemo

Cenario: Autenticação Válida
Quando eu digitar o usuário "standard_user"
E a senha "secret_sauce"
E confirmar login
Então deve ser exibido o título "Products"