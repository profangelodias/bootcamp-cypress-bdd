/// <reference types="cypress" />

describe('Produtoss', () => {
    beforeEach(() => {
        cy.logar();
    })

    it('login válido', () => {
        let item = 5


        cy.get('[class=inventory_item]')
            // .last()
            // .first()
            .eq(item)
            // .contains('Bike')
            .contains('Add to cart')
            .click()

        cy.get('[class=inventory_item]')
            // .last()
            // .first()
            .eq(item)
            // .contains('Bike')
            // .contains('Remove')
            .should('contain', 'Remove')


    })
})
