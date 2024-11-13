class Login {
    userName: string = '#userName'
    password: string = '#password'
    loginBtn: string = '#login'
    logOutBtn: string = '#submit'

    loginMethod(){
        cy.get(this.userName).type('test')
        cy.get(this.password).type('Test1234#')
        cy.get(this.loginBtn).click()
    }
}

export const LoginPage = new Login()