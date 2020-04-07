/// <reference types="Cypress" />

const scrollToBottom = require('scroll-to-bottomjs')

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
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})

context('Home page', () => {
  it('should render', () => {
    cy.visit('/')
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})

context('Motionen', () => {
  it('should render', () => {
    cy.visit('/motion')
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})

context('Material', () => {
  it('should render', () => {
    cy.visit('/material')
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})

context('About', () => {
  it('should render', () => {
    cy.visit('/om')
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})
