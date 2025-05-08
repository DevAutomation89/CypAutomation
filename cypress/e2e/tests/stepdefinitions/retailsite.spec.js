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
        
    When(/^User enter a "([^"]*)" in the search input$/, (product) => {
    cy.get(`[id="search_product"]`).type(product);
    cy.get(`[id="submit_search"]`).click();

  });

  Then("searched product is visible", () => {
    //cy.get(`div[class="features_items"]`).should('have.value', 'T-shirt')
    cy.get(`[class='features_items']`).find(`*:contains('T-Shirt')`);
    cy.intercept('GET','**/add_to_cart/1*').as('addcart');
  });
        // the "<subcategory>" is visible under category
  Then(/^the "([^"]*)" is visible under category$/, (subcategory) => {
   cy.get(`div[class='left-sidebar']`).find(`*:contains('Category')`).next(`*:contains('${subcategory}')`);
    
   
  });

  Then("User click on the add to cart button", () => {
    
    cy.get(`div[class='product-overlay']`).find (`*:contains('Add to cart')`).first().click({force:true});
    
    //cy.intercept('GET','**add_to_cart**').as('addcart2');
    cy.wait(['@addcart'],{timeout:5000});
    //cy.wait(['@addcart2']);
    //cy.log(['@addcart']);
    
  });

  Then("the item is added to the cart", () => {

    cy.get(`[id='cartModal']`).contains('p', "Your product has been added to cart.");
    cy.intercept('POST','**/api/v1/admin**').as('search');

    
  });

  

