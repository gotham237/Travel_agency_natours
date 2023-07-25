/* eslint-disable */
import header from '../pages/header';
import signupPage from '../pages/signupPage';

describe('Signup', () => {
  it('user SUCCESSFULLY signs up', () => {
    cy.visit(Cypress.env('host'));
    //cy.deleteUser();
    header.clickOnSignup();
    signupPage.signup(
      'szym',
      'test101@gmail.com',
      Cypress.env('default_password'),
      Cypress.env('default_password')
    );
  });
});
