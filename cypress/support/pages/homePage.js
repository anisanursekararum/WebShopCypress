const data = require('../../fixtures/data.json')

class HomePage {

  searchBox = '#small-searchterms'
  searhButton = 'form > .button-1'
  searchKeyword = '#Q'
  productTitle = '.product-title > a'

  search(product) {
    cy.input(this.searchBox, product)
    cy.button(this.searhButton)
    cy.get(this.searchKeyword).should('be.visible').should('have.value', product)
  }

  verifyProduct() {
    cy.get(this.productTitle).should('contain.text', data.productKeyword).should('have.attr', 'href')
  }


}

export default new HomePage()