import authPage from "../../support/pages/authPage"
const data = require("../../fixtures/data.json")

describe('Authorization', () => {
  beforeEach(() => {
    cy.visit('')
    cy.url().should('contain', 'tricentis')
  })

  //register POM and fixtures implemented
  it('Register mandatory field empty', () => {
    authPage.clickMenuRegister()
    authPage.clickButtonRegister()
    authPage.verifyRegisterFailed()
  })

  it('Email registered', () => {
    authPage.clickMenuRegister()
    authPage.genderRadio()
    authPage.inputFirstName()
    authPage.inputLastName()
    authPage.inputEmail(data.emailRegistered)
    authPage.inputPass(data.password)
    authPage.inputConfPass()
    authPage.clickButtonRegister()
    authPage.verifyEmailRegistered()
  })

  it('Register success', () => {
    authPage.clickMenuRegister()
    authPage.genderRadio()
    authPage.inputFirstName()
    authPage.inputLastName()
    authPage.inputEmailRegister()
    authPage.inputPass(data.password)
    authPage.inputConfPass()
    authPage.clickButtonRegister()
    authPage.verSuccessRegis()
    authPage.clickButtonLogout()
  })

  //login use dynamic data in fixtures
  it('Login negative case use data from fixtures', () => {
    cy.fixture('userDynamic').its('data').then(user => {
      user.forEach((user) => {
        const email = user.email
        const password = user.password
        authPage.clickMenuLogin()
        authPage.inputEmail(email)
        authPage.inputPass(password)
        authPage.clickButtonLogin()
        authPage.verifyLoginFailed()
      })
    })
  })

})