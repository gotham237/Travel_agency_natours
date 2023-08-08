/*eslint-disable */
import loginPage from '../pages/loginPage';
import mainPage from '../pages/mainPage';
import card from '../pages/card';
import header from '../pages/header';
import signupPage from '../pages/signupPage';

beforeEach(function() {
  cy.visit('/');
});

describe('MAIN PAGE and USER JOURNEY', () => {
  context('MAIN PAGE ACTIONS', () => {
    it('check if number of cards = 10', () => {
      mainPage.getNumOfCards().should('eq', 10);
    });

    it('click every card', () => {
      for (let i = 0; i < 10; i++) {
        mainPage.elements
          .cards()
          .eq(i)
          .find('a')
          .click();
        cy.wait(1000);
        cy.go('back');
      }
    });
  });

  context('USER JOURNEY', () => {
    it('user logs in and books a tour', () => {
      mainPage.getRandomCardAndClick();
      card.checkCardLocation();
      //const tourName = card.getTourNameAsString();
      card.clickOnBookTourToLoginBtn();
      cy.location('pathname').should('eq', '/login');
      loginPage.login('test@gmail.com', Cypress.env('default_password'));
      loginPage.elements.alert().should('have.class', 'alert--success');
      cy.location('pathname').should('eq', '/');
    });

    it('user chooses a  1st tour, creates account, books a tour', () => {
      mainPage.getCardAndClick(0);
      card.checkCardLocation();
      card.clickOnBookTourToLoginBtn();
      cy.location('pathname').should('eq', '/login');
      header.clickOnSignup();
      cy.url().should('contain', '/signup');
      cy.createRandomEmail().then(randomEmail => {
        signupPage.signup(
          'test',
          randomEmail,
          Cypress.env('default_password'),
          Cypress.env('default_password')
        );
      });

      signupPage.checkMessage('alert--success', 'succesfully');
      cy.location('pathname').should('eq', '/');
      mainPage.getCardAndClick(0);
      card.clickOnBookTourBtn();
    });
  });
});
