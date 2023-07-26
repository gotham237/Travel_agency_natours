/* eslint-disable */
import header from '../pages/header';
import loginPage from '../pages/loginPage';

beforeEach(function() {
  cy.visit(Cypress.env('host'));
});

describe('User login', () => {
  it('user logs in SUCCESSFULLY', () => {
    cy.clearCookies();
    header.clickOnLogin();
    loginPage.login('test@gmail.com', Cypress.env('default_password'));
    loginPage.elements.alert().should('have.class', 'alert--success');
    cy.location('pathname').should('eq', '/');
  });

  it('user tries to login with INCORRECT credentials', () => {
    header.clickOnLogin();
    loginPage.login('test@gmailcom', Cypress.env('default_password'));
    loginPage.elements
      .alert()
      .should('have.class', 'alert--error')
      .and('contain', 'Incorrect email or password');
  });

});
