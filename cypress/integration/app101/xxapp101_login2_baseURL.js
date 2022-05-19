Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

describe('App 110 open test with baseURL', () => {
    it('Opening login page', () => {
      //using baseURL variable
      cy.visit('101/login_desktop');    
    });  
  });
