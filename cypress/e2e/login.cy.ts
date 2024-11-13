import {LoginPage} from "../../pages/Login"
describe('LOGIN PAGE', () => {

  beforeEach(() => {
    cy.visit('/login')
  });

  it('LOGIN REGULAR TEST', () => {
    cy.get('#userName').type('test')
    cy.get('#password').type('Test1234#')
    cy.contains('button', 'Login').click()
    cy.contains('Log out')
  })

  it.only('LOGIN TEST WITH Class/POM ( using page object)', () => {
    LoginPage.loginMethod()
    cy.contains('Log out')
    cy.log(LoginPage.password)
    console.log(LoginPage.password)
  })
})