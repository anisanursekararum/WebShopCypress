import authPage from "../../support/pages/authPage"

describe('Authorization', () => {
  beforeEach(() => {
    cy.visit('')
    cy.url().should('contain', 'tricentis')
  })

  //register
  it('Register mandatory field empty', () => {
    authPage.clickRegister()
  })
})