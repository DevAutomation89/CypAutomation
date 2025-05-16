import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given("the user is on the retail portal", () => {
    cy.visit('https://automationexercise.com/products');
   //cy.visit();
  });

When("the user clicks on login", () => {
    cy.get(`a[href="/login"]`).click();
  });

  When("the user enters valid credintials {string} and {string}", (email,password) => {
    cy.get(`[data-qa="login-email"]`).type(email);
    cy.get(`[data-qa="login-password"]`).type(password);
    cy.get(`[data-qa="login-button"]`).click();
  });

  Then("the user successfully logged in and landing on the Retailhome page", () => {
    cy.contains("h1", "AutomationExercise");
  });

  When("User clicks on products button", () => {
    cy.get(`a[href="/products"]`).click();
  });

  Then("User will be navigated to all products page successfully", () => {
    cy.get(`h2:contains('All Products')`).scrollIntoView().should('be.visible');
  });
        
    When(/^User enter a "([^"]*)" in the search input$/, (product1) => {
    cy.get(`[id="search_product"]`).type(product1);
    cy.get(`[id="submit_search"]`).click();

  });

  Then(/^searched "([^"]*)" is visible$/, (product1) => {
    //cy.get(`div[class="features_items"]`).should('have.value', 'T-shirt')
    cy.get(`[class='features_items']`).find(`*:contains('${product1}')`);
    //cy.intercept('GET','**/add_to_cart/1*').as('addcart');
  });
        // the "<subcategory>" is visible under category
  Then(/^the "([^"]*)" is visible under category$/, (subcategory) => {
   cy.get(`div[class='left-sidebar']`).find(`*:contains('Category')`).next(`*:contains('${subcategory}')`);
    
   
  });

  Then("User click on the add to cart button", () => {
    cy.contains('a.btn.add-to-cart', 'Add to cart').first().click();

    //cy.get(`div[class='product-overlay']`).find (`*:contains('Add to cart')`).first().click({force:true});
    
    
    
  });

  Then("the item is added to the cart", () => {

    cy.get(`[id='cartModal']`).contains('p', "Your product has been added to cart.");
    

    //cy.intercept('POST','**/api/v1/admin**').as('search'); 
  });

  Then("the user clicks on the continue button", () => {

    cy.contains('button.btn.btn-success.close-modal.btn-block', 'Continue Shopping').click({force: true});
    
   });
 
   When("the user clicks on the cart button", () => {
    cy.get('a[href="/view_cart"]').first().click();
     });

  
  

