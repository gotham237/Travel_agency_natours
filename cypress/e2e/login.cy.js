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
    loginPage.login();
  });
});
