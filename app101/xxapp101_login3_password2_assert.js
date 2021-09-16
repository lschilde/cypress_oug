describe('App 110 open test with baseURL', () => {
    it('Opening login page', () => {
        //using baseURL variable
        cy.visit('101/login_desktop');   
        cy.get('#P101_USERNAME').type("demo");
        var password = Cypress.env("demoUsername");
        cy.get('#P101_PASSWORD').type(password, {log:false});
        cy.get('#P101_LOGIN').click();
        cy.url().should("contain", "101/sample-database-application");
        cy.get('.t-HeroRegion-title').should("contain", "Sample Database Application");
    });  
});