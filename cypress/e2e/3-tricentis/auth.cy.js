import authPage from "../../support/pages/authPage"

describe('Authorization', () => {
  beforeEach(() => {
    cy.visit('')
    cy.url().should('contain', 'tricentis')
  })

  //register POM and fixtures implemented
  it('Register mandatory field empty', () => {
    authPage.clickMenuRegister()
    authPage.clickButtonRegister()
    authPage.verifyMessages()
  })

  it.only('Register success', () => {
    authPage.clickMenuRegister()
    authPage.genderRadio()
    authPage.inputFirstName()
    authPage.inputLastName()
    authPage.inputEmail()
    authPage.inputPass()
    authPage.inputConfPass()
    authPage.clickButtonRegister()
    authPage.verSuccessRegis()
    authPage.clickButtonLogout()
  })
})