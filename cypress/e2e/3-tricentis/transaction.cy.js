import transactionPage from "../../support/pages/transactionPage"
import homePage from "../../support/pages/homePage"
const data = require('../../fixtures/data.json')

describe('Transaction', () => {
  beforeEach(() => {
    cy.visit('')
    cy.url().should('contain', 'tricentis')
  })

  it('Add to cart and then update', () => {
    homePage.search(data.product1)
    homePage.verifyProduct(data.product1)
    transactionPage.addButton()
    transactionPage.clickCartMenu()
    transactionPage.updateCart()
  })



})