const messages = require('../../fixtures/messages.json')
const data = require('../../fixtures/data.json')
const formatter = new Intl.NumberFormat('id-ID', {
  minimumFractionDigits: 2,      
  maximumFractionDigits: 2,
});

class TransactionPage {
  addToCartButton = '.button-2'
  addToCartAlert = '.content'
  cartMenu = '.ico-cart > .cart-label'
  cartWording = 'h1'
  qtyInput = '.qty-input'
  updateCartButton = '.update-cart-button'
  removeCheckbox = ':nth-child(1) > .remove-from-cart > input'
  productPrice = '.product-unit-price'
  totalProductPrice = '.product-subtotal'
  removeVerify = '.order-summary-content'
  
  addButton() {
    cy.button(this.addToCartButton)
    cy.get(this.addToCartAlert).should('contain', messages.addToCartAlert).should('be.visible')
  }
  
  clickCartMenu() {
    cy.button(this.cartMenu)
    cy.url().should('contain', 'cart')
    cy.get(this.cartWording).should('have.text', messages.cartWording)
  }
  
  updateCart() {
    cy.get(this.qtyInput).clear()
    cy.input(this.qtyInput, data.qty)
    cy.button(this.updateCartButton)
    cy.get(this.qtyInput).should('have.value', data.qty)
    cy.get(this.productPrice).should('have.text', data.price)
    // cy.get(this.totalProductPrice).should('have.text', (data.price*data.qty))
  }

  removeProduct() {
    cy.get(this.removeCheckbox).check()
    cy.button(this.updateCartButton)
    cy.get(this.removeProduct).should('have.text', messages.cartEmpty)
  }
  

}

export default new TransactionPage()