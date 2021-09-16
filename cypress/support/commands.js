// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/*Cypress.Commands.add('clickButton', (label) => {    
    cy.get('[data-cy="'+ label +'"]').click();
}); 
Cypress.Commands.add('clickButtonwithID', (buttonID) => {    
    cy.get(buttonID).click();
});*/ 
Cypress.Commands.add("loginMeIn", () => {
    cy.server();
    cy.visit("101/login_desktop");  
    cy.url().should("contain", "101/login_desktop");
    cy.get('.t-Login-header').should("contain","Sample Database Application");
    cy.get('#P101_USERNAME')
      .type("demo")
      .should("have.value","demo");
    var password = Cypress.env("demoUsername"); 
    cy.get('#P101_PASSWORD').type(password, {sensitive: true, log:false}); 
    cy.get('#P101_LOGIN').click();
    //cy.clickButtonwithID('#P101_LOGIN');
    cy.url().should("contain", "101/sample-database-application");
    cy.get('.t-HeroRegion-title').should("contain","Sample Database Application");    
  });
