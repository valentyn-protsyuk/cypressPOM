import {IframePage} from '../../pages/Iframe'

//check
describe('IFRAME', () => {
    beforeEach(() => {
        IframePage.visit();
    });
    it('test iframe', () => {
        IframePage.getIframe();
    });
});