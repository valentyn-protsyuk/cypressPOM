describe('LOGIN PAGE', () => {

  beforeEach(() => {
    cy.visit('/login')
  });

  it('login test', () => {
    cy.get('#userName').type('test')
    cy.get('#password').type('Test1234#')
    cy.contains('button', 'Login').click()
    cy.contains('Log out')
  })
})