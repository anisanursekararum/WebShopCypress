import transactionPage from "../../support/pages/transactionPage"
import homePage from "../../support/pages/homePage"
import authPage from "../../support/pages/authPage"
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

  it('Add to cart and then remove', () => {
    homePage.search(data.product1)
    homePage.verifyProduct(data.product1)
    transactionPage.addButton()
    transactionPage.clickCartMenu()
    transactionPage.removeProduct()
  })

  it('Checkout and payment', () => {
    authPage.clickMenuRegister()
    authPage.genderRadio()
    authPage.inputFirstName()
    authPage.inputLastName()
    authPage.inputEmailRegister()
    authPage.inputPass(data.password)
    authPage.inputConfPass()
    authPage.clickButtonRegister()
    homePage.search(data.product2)
    homePage.verifyProduct(data.product2)
    transactionPage.addButton()
    transactionPage.clickCartMenu()
    transactionPage.verifyCart()
    transactionPage.checkoutBillingAddress()
    transactionPage.checkoutShippingAddress()
    transactionPage.checkoutShippingMethod()
    transactionPage.checkoutPaymentMethod()
    transactionPage.checkoutPaymentInformation()
    transactionPage.checkoutConfirmOrder()
    transactionPage.successOrder()
    transactionPage.orderInfo()
  })


})