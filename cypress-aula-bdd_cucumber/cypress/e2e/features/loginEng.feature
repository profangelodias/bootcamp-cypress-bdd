Feature: Login Geral
    Feature Description: Login no Swag Labs

    Background: Background name (opcional)
        Given que eu acesse a página de autenticação do saucedemo

    Scenario: Autenticação Válida
        When eu digitar o usuário "standard_user"
        And a senha "secret_sauce"
        And confirmar login
        Then deve ser exibida a logo do "Swag Labs"

    Scenario Outline: Autenticação Válida
        When eu digitar o usuário <user>
        And a senha <pass>
        And confirmar login
        Then deve ser exibida a logo do <text>
        Examples:
            | user              | pass           | text        |
            | "standard_user"   | "secret_sauce" | "Swag Labs" |
            | "locked_out_user" | "secret_sauce" | "Swag Labs" |
            | "problem_user"    | "secret_sauce" | "Swag Labs" |