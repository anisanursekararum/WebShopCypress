import homePage from "../../support/pages/homePage"
const data = require("../../fixtures/data.json")

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.url().should('contain', 'tricentis')
  })
  it('Search', () => {
    homePage.search(data.productKeyword)
    homePage.verifyProduct(data.productKeyword)
  })
  
  it('Top Menu', () => {
    homePage.topMenu()
  })

  it('Categories', () => {
    homePage.categoriesSide()
  })
})