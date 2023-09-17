class AuthPage {
  
  registerButton = '.ico-register'

  clickRegister() {
    cy.get(this.registerButton).click()
    cy.url().should('contain', 'register')
  }

}

export default new AuthPage()