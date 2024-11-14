class Iframe {
    private iframeID:string = "#frame1";
    private ifBody:string = "body"

    getIframe(){
        cy.get(this.iframeID).then(iFrame=>{
            const body = iFrame.contents().find(this.ifBody);
            cy.wrap(body).should('have.text', 'Parent frame');
        })
    }

}

export const IframePage = new Iframe();