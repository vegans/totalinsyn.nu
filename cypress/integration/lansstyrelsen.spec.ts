/// <reference types="Cypress" />

context('Lansstyrelsen', () => {
  it('should render images', () => {
    cy.visit('/lansstyrelsen')
    cy.get('[data-testid="image-source"]')
      .its('length')
      .should('be.gt', 0)
    cy.get('[data-testid="image-source"]')
      .first()
      .find('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.percySnapshot();
  })
})
