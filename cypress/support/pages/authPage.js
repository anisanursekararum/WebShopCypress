const messages = require('../../fixtures/messages.json')
const data = require('../../fixtures/data.json')
const currentDate = new Date();
const randomNumber = Math.floor(1000 + Math.random() * 9000);

class AuthPage {
  
  registerMenu = '.ico-register'
  registerButton = '#register-button'
  firstnameMessages = ':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span'
  lastnameMessages = ':nth-child(3) > .field-validation-error > span'
  emailMessages = ':nth-child(4) > .field-validation-error > span'
  passMessages = ':nth-child(1) > .field-validation-error > span'
  confPassMessages = ':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span'
  gender = '#gender-male'
  firstname = '#FirstName'
  lastname =  '#LastName'
  email = '#Email'
  pass = '#Password'
  confPass = '#ConfirmPassword'
  wrongEmail = '.field-validation-error > span'
  fieldEmail = '.form-fields > :nth-child(4)'
  fieldPass = ':nth-child(3) > .form-fields > :nth-child(2)'
  wrongPass = '.field-validation-error > span'
  registerComplete = '.result'
  logout = '.ico-logout'


  clickMenuRegister() {
    cy.button(this.registerMenu)
    cy.url().should('contain', 'register')
  }

  clickButtonRegister() {
    cy.button(this.registerButton)
  }

  verifyMessages() {
    cy.get(this.firstnameMessages).should('have.text', messages.firstname)
    cy.get(this.lastnameMessages).should('have.text', messages.lastname)
    cy.get(this.emailMessages).should('have.text', messages.email)
    cy.get(this.passMessages).should('have.text', messages.password)
    cy.get(this.confPassMessages).should('have.text', messages.password)
  }

  genderRadio() {
    cy.get(this.gender).check(data.genderM).should('have.value', data.genderM)
  }

  inputFirstName() {
    cy.input(this.firstname, data.firstname)
  }

  inputLastName() {
    cy.input(this.lastname, data.lastname)
  }

  inputEmail() {
    cy.input(this.email, currentDate.toString()+"gmail.com")
    cy.button(this.fieldEmail)
    cy.get(this.wrongEmail).should('have.text', messages.wrongEmail)
    cy.get(this.email).clear()
    cy.input(this.email, "arum"+randomNumber+"@gmail.com")
  }

  inputPass() {
    cy.input(this.pass, data.password)
  }

  inputConfPass() {
    cy.input(this.confPass, data.wrongPass)
    cy.button(this.fieldPass)
    cy.get(this.wrongPass).should('have.text', messages.notMatchPass)
    cy.get(this.confPass).clear()
    cy.input(this.confPass, data.password)
  }

  verSuccessRegis() {
    cy.get(this.registerComplete).should('be.visible').should('have.contain', messages.registerComplete)
    cy.url().should('contain', data.registerResult)
  }
  
  clickButtonLogout() {
    cy.button(this.logout)
    cy.url().should('include', data.url)
  }

}

export default new AuthPage()