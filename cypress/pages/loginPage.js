/* eslint-disable */

export class LoginPage {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.contains('Login'),
  };

  login() {
    this.elements.emailInput().type('test@gmail.com');
    this.elements.passwordInput().type('test1234');
    this.elements.loginBtn().click();
    cy.location('pathname').should('eq', '/');
  }

  checkIfSuccessfull() {
    this.elements.alert().should('contain.text', 'Logged in successfully!');
  }
}

module.exports = new LoginPage();
