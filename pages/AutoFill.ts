class AutoFill {
    private inputField: string = '.auto-complete__value-container'
    private dropDown: string = '#react-select-2-option-0'
    private result: string = '.auto-complete__multi-value__label'

    autoComplete(){
        const obj = {
            Y: 'Yellow'
        }

        cy.get(this.inputField).eq(0).type(Object.keys(obj)[0]) //Type: Y
        cy.contains(this.dropDown,Object.values(obj)[0]).click() //click on 'Yellow' in drop down
        cy.get(this.result).should('have.text', Object.values(obj)[0]) //check that label = yellow
    }
}

export const AutoFillPage = new AutoFill();