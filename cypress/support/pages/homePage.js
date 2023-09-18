const data = require('../../fixtures/data.json')

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

  verifyProduct() {
    cy.url().should('contain', 'search')
    cy.get(this.productTitle).should('contain.text', data.productKeyword).should('have.attr', 'href')
  }

  topMenu() {
    cy.get(this.menu).find('li')
      .should('contain', data.menu1).should('exist')
      .should('contain', data.menu2).should('exist')
      .should('contain', data.menu3).should('exist')
      .should('contain', data.menu4).should('exist')
      .should('contain', data.menu5).should('exist')
      .should('contain', data.menu6).should('exist')
      .should('contain', data.menu7).should('exist')
  }

  categoriesSide() {
    cy.get(this.categories).find('li')
      .should('contain', data.menu1).should('exist')
      .should('contain', data.menu2).should('exist')
      .should('contain', data.menu3).should('exist')
      .should('contain', data.menu4).should('exist')
      .should('contain', data.menu5).should('exist')
      .should('contain', data.menu6).should('exist')
      .should('contain', data.menu7).should('exist')
  }


}

export default new HomePage()