/// <reference types="Cypress" />

context('Categories', () => {
  it('should render products', () => {
    cy.visit('/01')
    cy.get('[data-testid="thumbnail"]')
      .its('length')
      .should('be.gt', 0)
    cy.get('[data-testid="thumbnail"]')
      .first().find("img").should('be.visible');
  })
})
