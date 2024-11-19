import {AutoFillPage} from "../../pages/AutoFill"
describe('AUTO FILL', () => {
    beforeEach(() => {
        cy.visit('auto-complete')
    });
    it('verify that autofill works', () => {
        AutoFillPage.autoComplete()
    });
});