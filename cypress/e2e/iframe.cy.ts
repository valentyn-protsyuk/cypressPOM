import {IframePage} from '../../pages/Iframe'

//check2

describe('IFRAME', () => {
    beforeEach(() => {
        IframePage.visit();
    });
    it('test iframe', () => {
        IframePage.getIframe();
    });
});