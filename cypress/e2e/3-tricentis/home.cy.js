import homePage from "../../support/pages/homePage"
const data = require("../../fixtures/data.json")

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.url().should('contain', 'tricentis')
  })
  it('Search', () => {
    homePage.search(data.product1)
    homePage.verifyProduct(data.product1)
  })
  
  it('Top Menu', () => {
    homePage.topMenu()
  })

  it('Categories', () => {
    homePage.categoriesSide()
  })
})