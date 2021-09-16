describe('App 110 open test', () => {
    it('Failed login', () => {
      //using baseURL variable
      cy.visit('101/login_desktop');   
      cy.url().should("contain", "101/login_desktop");
      cy.get('.t-Login-title').should("contain", "Sample Database Application");  

      cy.get('#P101_USERNAME').type("demo").should("have.value","demo");
      //hide password; hide from log
      var password = "BADBAD"; 
      cy.get('#P101_PASSWORD').type(password, {log:false});
      //login btn
      cy.get('#P101_LOGIN').click();
      cy.get('.t-Alert-body').should("contain","Invalid Login Credentials");
    });  
  });