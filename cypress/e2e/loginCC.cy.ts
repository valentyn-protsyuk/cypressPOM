describe('LOGIN PAGE', () => {

  beforeEach(() => {
    cy.visit('/login')
  });

  it('LOGIN REGULAR TEST', () => {
    cy.login('test','Test123*');
    cy.contains('Log out')
  })
})