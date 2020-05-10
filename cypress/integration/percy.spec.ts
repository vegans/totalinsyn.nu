/// <reference types="Cypress" />

const scrollToBottom = require('scroll-to-bottomjs')

context('Home page', () => {
  it('should render', () => {
    cy.visit('/')
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})

context('Action #01 page', () => {
  it('should render images', () => {
    cy.visit('/01')
    cy.get('[data-testid="thumbnail"]')
      .its('length')
      .should('be.gt', 0)
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})

context('Action #02 page', () => {
  it('should render images', () => {
    cy.visit('/02')
    cy.get('[data-testid="thumbnail"]')
      .its('length')
      .should('be.gt', 0)
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})

context('Action #03 page', () => {
  it('should render images', () => {
    cy.visit('/03')
    cy.get('[data-testid="thumbnail"]')
      .its('length')
      .should('be.gt', 0)
    cy.wait(10000)
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot()
  })
})

context('Action #04 page', () => {
  it('should render images', () => {
    cy.visit('/04')
    cy.get('[data-testid="thumbnail"]')
      .its('length')
      .should('be.gt', 0)
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
    cy.get('[data-testid="actions-menu"]').click()
    cy.percySnapshot()
  })
})
