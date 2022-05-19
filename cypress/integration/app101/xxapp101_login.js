Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

describe('First APP demo', () => {
  it('Open login page', () => {
    cy.visit('https://icona8dnofzzzzp-db202010161259.adb.ap-sydney-1.oraclecloudapps.com/ords/r/lino/101/login_desktop');
    //assertion
    cy.url().should("contain", "101/login_desktop");
    cy.get('.t-Login-title').should("contain", "Sample Database Application");  
  });
});
