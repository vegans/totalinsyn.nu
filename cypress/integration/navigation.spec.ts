/// <reference types="Cypress" />

context('Navigation', () => {
  it('should work', () => {
    cy.visit('/01')
    cy.get('[data-testid="link-motion"]').click()
    cy.url().should('contain', '/motion');
  })
})
