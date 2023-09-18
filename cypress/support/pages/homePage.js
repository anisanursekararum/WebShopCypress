const data = require('../../fixtures/data.json')
const messages = require("../../fixtures/messages.json")


class HomePage {

  searchBox = '#small-searchterms'
  searhButton = 'form > .button-1'
  searchKeyword = '#Q'
  productTitle = '.product-title > a'
  menu = '.top-menu'
  categories = '.list'

  search(product) {
    cy.input(this.searchBox, product)
    cy.button(this.searhButton)
    cy.get(this.searchKeyword).should('be.visible').should('have.value', product)
  }

  verifyProduct(product) {
    cy.url().should('contain', 'search')
    cy.get(this.productTitle).should('contain.text', product).should('have.attr', 'href')
  }

  topMenu() {
    cy.get(this.menu).find('li')
      .should('contain', messages.menu1).should('exist')
      .should('contain', messages.menu2).should('exist')
      .should('contain', messages.menu3).should('exist')
      .should('contain', messages.menu4).should('exist')
      .should('contain', messages.menu5).should('exist')
      .should('contain', messages.menu6).should('exist')
      .should('contain', messages.menu7).should('exist')
  }

  categoriesSide() {
    cy.get(this.categories).find('li')
      .should('contain', messages.menu1).should('exist')
      .should('contain', messages.menu2).should('exist')
      .should('contain', messages.menu3).should('exist')
      .should('contain', messages.menu4).should('exist')
      .should('contain', messages.menu5).should('exist')
      .should('contain', messages.menu6).should('exist')
      .should('contain', messages.menu7).should('exist')
  }

}

export default new HomePage()