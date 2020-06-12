/// <reference types="Cypress" />

const scrollToBottom = require('scroll-to-bottomjs')

const actions = ['01', '02', '03', '04']
const pages = [
  {
    url: '/',
    openMenu: true
  },
  {
    url: '/motion'
  },
  {
    url: '/material'
  },
  {
    url: '/om',
    openMenu: true
  }
]

context('Pages', () => {
  pages.forEach((page) => {
    it(`page ${page.url}`, () => {
      cy.visit(page.url)
      if (page.openMenu) {
        cy.get('[data-testid="actions-menu"]').click()
      }
      cy.window().then((cyWindow) => scrollToBottom({ remoteWindow: cyWindow }))
      cy.wait(100)
      cy.percySnapshot()
    })
  })
})

context('Action pages', () => {
  actions.forEach((page) => {
    it(`action #${page}`, () => {
      cy.visit(page)
      cy.get('[data-testid="thumbnail"]')
        .its('length')
        .should('be.gt', 0)
      cy.window().then((cyWindow) => scrollToBottom({ remoteWindow: cyWindow }))
      cy.percySnapshot()
    })
  })
})
