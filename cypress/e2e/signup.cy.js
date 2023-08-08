/* eslint-disable */
import header from '../pages/header';
import signupPage from '../pages/signupPage';

beforeEach(() => {
  cy.visit(Cypress.env('host'));
});

describe('SIGNUP', () => {
  it('user SUCCESSFULLY signs up', () => {
    //cy.deleteUser();
    header.clickOnSignup();
    signupPage.signup(
      'test',
      createRandomEmail(),
      Cypress.env('default_password'),
      Cypress.env('default_password')
    );
    signupPage.checkMessage('alert--success', 'succesfully');
    cy.location('pathname').should('eq', '/');
  });

  it('user with this email ALREADY EXISTS', () => {
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

function createRandomEmail() {
  let email = '';
  const letters = 'ABCDEFGHIJKLMNNOPRSTUWXYZabcdefghijklmnoprstuwxyz';
  for (let i = 0; i < 5; i++) {
    email += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  email += '@gmail.com';
  // console.log(email);
  return email;
}
