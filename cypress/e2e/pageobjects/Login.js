class Login{
    
visit(url){
    cy.visit(url)
}

clickRegistration(){
    cy.get(`a[href="register.php"]`).click();
}

loginEmailAndPwd(username, password){
    cy.get(`[id="email"]`).type(username),
    cy.get(`[id="password"]`).type(password),
    cy.get(`input[name="submit"]`).click();
}

logout(){
    
    cy.get(`input[type="submit"]`).first().click();
}

validateLoginPage(){
    cy.contains(("h3","Login"));
}

}
export default Login