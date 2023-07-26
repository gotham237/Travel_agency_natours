/* eslint-disable */
import header from '../pages/header';
import signupPage from '../pages/signupPage';

beforeEach(() => {
  cy.visit(Cypress.env('host'));
});

describe('Signup', () => {
  it('user SUCCESSFULLY signs up', () => {
    //cy.deleteUser();
    header.clickOnSignup();
    signupPage.signup(
      'szym',
      'test101@gmail.com',
      Cypress.env('default_password'),
      Cypress.env('default_password')
    );
    signupPage.checkMessage('alert--success', 'succesfully');
    cy.location('pathname').should('eq', '/');
  });

  it.only('user with this email ALREADY EXISTS', () => {
    header.clickOnSignup();
    signupPage.signup(
      'test',
      'test@gmail.com',
      Cypress.env('default_password'),
      Cypress.env('default_password')
    );
    signupPage.checkMessage('alert--error', 'test@gmail.com');
  });
});
