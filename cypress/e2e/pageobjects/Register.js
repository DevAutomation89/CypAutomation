class Register{

    validUserRegistration(){
        
         //firstname
        cy.get(`[id="user_firstname"]`).type("Menuka");
         //Surname 
         cy.get(`[id="user_surname"]`).type("Ekanayake");
         //Phone
         cy.get(`[id="user_phone"]`).type("0449628105");
        /**  //DOB -year/month/date
         cy.get(`[id="user_dateofbirth_1i"]`).click();
         cy.get('select').select('1937').should('have.value', '1937');
         cy.get(`[id="user_dateofbirth_2i"]`).click();
         cy.get('select').select('June').should('have.value', 'June');
         cy.get(`[id="user_dateofbirth_3i"]`).click();
         cy.get('select').select('21').should('have.value', '21');
         //Licence period
         cy.get(`[id="user_licenceperiod"]`).click();
         cy.get('select').select('2').should('have.value', '2');
        //Occupation
         cy.get(`[id="user_occupation_id"]`).click();
         cy.get('select').select('Actor').should('have.value', 'Actor');*/
         //Address Street
         cy.get(`[id="user_address_attributes_street"]`).type("28 Stack Pole Street");
         cy.get(`[id="user_address_attributes_city"]`).type("Brisbane");
         cy.get(`[id="user_address_attributes_county"]`).type("Australia");
         cy.get(`[id="user_address_attributes_postcode"]`).type("4122");
         //Email
         cy.get(`[id="user_user_detail_attributes_email"]`).type("emmenuka@gmail.com");
         // Password
         cy.get(`[id="user_user_detail_attributes_password"]`).type("12345");
         cy.get(`[id="user_user_detail_attributes_password_confirmation"]`).type("12345");
         


    }

    createUser(){
//create
cy.get(`input[name="submit"]`).click();

    }

}
export default Register