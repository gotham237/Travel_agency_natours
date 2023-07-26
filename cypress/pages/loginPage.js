/* eslint-disable */

export class LoginPage {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.contains('Login'),
    alert: () => cy.get('.alert')
  };

  login(email, password) {
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
    //this.elements.alert().should('be.visible');
  }

  checkMessage(cls, email) {
    this.elements
      .alert()
      .should('have.class', cls)
      .and('contain', email);
    cy.wait(1000);
    this.elements.alert().should('not.exist');
  }
}

module.exports = new LoginPage();
