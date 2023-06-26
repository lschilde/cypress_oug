Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

describe('App 110 Share code through Commands', () => {
    before(function () {
      //LOGIN
      cy.loginMeIn();
    });  
    it('Visit Page 2', ()=> {
      cy.get('#t_TreeNav_1 > .a-TreeView-content > .fa').click();
      cy.url().should("contain", "/customers");    
      cy.get('[data-cy="create_customer_non_modalButton"]').click();
            
      const uuid = () => Cypress._.random(0, 1e6);
      const id = uuid();
      const firstName = `DemoCypress${id}`; 
      
      cy.get("#P18_CUST_FIRST_NAME").type(firstName);
      cy.get("#P18_CUST_LAST_NAME").type("Demo");
      cy.get("#P18_CUST_STREET_ADDRESS1").type("Address1");
      cy.get("#P18_CUST_STREET_ADDRESS2").type("Address2");
      cy.get("#P18_CUST_CITY").type("Chicago");
      cy.get("#P18_CUST_EMAIL").type("xx@myemail.com");
  
      cy.get("#P18_CUST_POSTAL_CODE").type("99282");
      cy.get("#P18_CREDIT_LIMIT").type("1000");
      cy.get("#P18_CUST_STATE").select("Texas");
      cy.get("[data-cy=add_customerButton]").click();
      
      //assert successful creation of the row 
      cy.url().should("contain", "101/customers");
      cy.contains("td",firstName);
      
    });   
    
  
  });
