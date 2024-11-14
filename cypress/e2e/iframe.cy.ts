import {IframePage} from '../../pages/Iframe'

describe('IFRAME', () => {
    beforeEach(() => {
        IframePage.visit();
    });
    it('test iframe', () => {
        IframePage.getIframe();
    });
});