const data = require('../../fixtures/messages.json')
class AuthPage {
  
  registerMenu = '.ico-register'
  registerButton = '#register-button'
  firstnameMessages = ':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span'
  lastnameMessages = ':nth-child(3) > .field-validation-error > span'
  emailMessages = ':nth-child(4) > .field-validation-error > span'
  passMessages = ':nth-child(1) > .field-validation-error > span'
  confPassMessages = ':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span'

  clickMenuRegister() {
    cy.get(this.registerMenu).click()
    cy.url().should('contain', 'register')
  }

  clickButtonRegister() {
    cy.get(this.registerButton).click()
  }

  verifyMessages() {
    cy.get(this.firstnameMessages).should('have.text', data.firstname)
    cy.get(this.lastnameMessages).should('have.text', data.lastname)
    cy.get(this.emailMessages).should('have.text', data.email)
    cy.get(this.passMessages).should('have.text', data.password)
    cy.get(this.confPassMessages).should('have.text', data.password)
  }

}

export default new AuthPage()