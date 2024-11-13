import { LoginPage } from "../../pages/Login";
describe('LOGIN WITH COOKIES', () => {
    beforeEach(() => {
        cy.session('Login with Cookies',()=>{
            cy.visit('/login')
            LoginPage.loginMethod();
            cy.wait(2000) //timing issue
        })
    });

    //check if you stay logged in
    it('create cookies with cy.session',() =>{
        cy.visit('/login')
        cy.url().then((url)=>{
            cy.log(url)
        })
    })

    it('create cookies with cy.session',() =>{
        cy.visit('/login')
        cy.contains('Log out')
    })


});