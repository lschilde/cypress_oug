Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

describe('App 101 open test with baseURL', () => {
    it('Opening login page', () => {
        //using baseURL variable
        cy.visit('101/login_desktop');   
        cy.get('#P101_USERNAME').type("demo");
        var password = Cypress.env("demoUsername");
        cy.get('#P101_PASSWORD').type(password, {log:false});
        cy.get('#P101_LOGIN').click();
    });  
});
