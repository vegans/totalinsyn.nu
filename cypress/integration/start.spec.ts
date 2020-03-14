/// <reference types="Cypress" />

context('Action page', () => {
  it('should render images', () => {
    cy.visit('/01')
    cy.get('[data-testid="thumbnail"]')
      .its('length')
      .should('be.gt', 0)
    cy.get('[data-testid="thumbnail"]')
      .first()
      .scrollIntoView()
      .find('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.percySnapshot();
  })
})

context('Home page', () => {
  it('should render', () => {
    cy.visit('/')
    cy.percySnapshot();
  })
})

context('Motionen', () => {
  it('should render', () => {
    cy.visit('/motion')
    cy.percySnapshot();
  })
})

context('Material', () => {
  it('should render', () => {
    cy.visit('/material')
    cy.percySnapshot();
  })
})
