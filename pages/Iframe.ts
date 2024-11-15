class Iframe {
    private iframeID:string = "#frame1";
    private ifBody:string = "body"
    private iframeChild:string = "iframe"

    visit(){
        cy.visit('/nestedframes');
    }
    
    getIframe(){
        cy.get(this.iframeID).then(iFrame=>{
            const body = iFrame.contents().find(this.ifBody);
            cy.wrap(body).should('have.text', 'Parent frame');

            cy.wrap(body).find(this.iframeChild).then(iFrameChild=>{
                const cBody= iFrameChild.contents().find(this.ifBody);
                cy.wrap(cBody).should('have.text', 'Child Iframe');
            })

        })
    }

}

export const IframePage = new Iframe();