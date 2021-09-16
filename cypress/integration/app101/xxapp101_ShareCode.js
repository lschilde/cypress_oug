describe('App 110 open test', () => {
    //HOOKS before(), afterEach(), after()
    beforeEach(function () {
      //using baseURL variable
      cy.visit('101/login_desktop');   
      cy.url().should("contain", "101/login_desktop");
      cy.get('.t-Login-header').should("contain","Sample Database Application");
      cy.get('#P101_USERNAME').type("demo").should("have.value","demo");
    });  
    it('Check login OK', ()=> {
      var password = Cypress.env("demoUsername"); 
      cy.get('#P101_PASSWORD').type(password, {log:false});
      cy.get('[data-cy=sign_inButton]').click();
      cy.url().should("contain", "101/sample-database-application");
      cy.get('.t-HeroRegion-title').should("contain","Sample Database Application");
    });
    it('Failed login check', () => {
      var password = "BADBAD"; 
      cy.get('#P101_PASSWORD').type(password, {log:false});
      cy.get('[data-cy=sign_inButton]').click();
      cy.get('.t-Alert-body').should("contain","Invalid Login Credentials");
    });  
  });