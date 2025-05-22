import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import Home from '../../../e2e/pageobjects/Home';
import Login from '../../../e2e/pageobjects/Login';
import Register from '../../../e2e/pageobjects/Register';
import Quotation from '../../../e2e/pageobjects/Quotation';

const home = new Home();
const login = new Login();
const register = new Register();
const quotation = new Quotation();

Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception: ', err);
    return false;
  });

  When("the user clicks on the register button", () => {
    login.clickRegistration();
  });
  
  When("the user enters a valid data", () => {
    register.validUserRegistration();
  });

  When("the user clicks the create button", () => {
    register.createUser();
  });

  Then("the user should be redirected to the Login page", () => {
    login.validateLoginPage();
  });

  When("the user request a quotation", () => {
    quotation.clickRequestQuotation();
  });
     
  When(/^the user enters a valid quotation data for "([^"]*)" and "([^"]*)"$/, (cover, parkingLocation) => {
    quotation.calculateCover(cover, parkingLocation);

});

Then("the user clicks the Save Quotation button", () => {
  quotation.saveQuotation();
});





Given("the user is on the login page", () => {
    login.visit('https://demo.guru99.com/insurance/v1/index.php');
    
});
   

When("the user enters valid {string} and {string}", (username, password) => {
  login.loginEmailAndPwd(username, password);   
});

Then("the user has {string} for {string}", (outcome, condition) => {
  switch (condition.toLowerCase()){
    case 'positive':
      cy.contains('h2', 'Broker Insurance WebPage');
      break; 
    case 'negative':
      cy.contains('b', 'Enter your Email address and password correct');
      break;
      default:
        break;
  }

    //home.validateHomePage();
 });
/** 
 Then(`in '{}' section, '{}' is displayed`, (section: string, text: string) => {
  switch (section.toLowerCase()) {
    case 'current plans':
      cy.get(`h2:contains('${section}')`).parent(`div`).parent(`div`).contains(text).should('be.visible');
      break;
    default:
      throw new Error(section + ' section is not defined');
  }
});*/

 Given("the user is on the home page", () => {
  login.visit('https://demo.guru99.com/insurance/v1/header.php')
  
});

When("the user clicked on logout button", () => {
  login.logout();   
});

Then("the user successfully logged out and landed to login page", () => {
  login.validateLoginPage();
});



