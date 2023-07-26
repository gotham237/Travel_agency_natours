/*eslint-disable */
import header from '../pages/header';
import loginPage from '../pages/loginPage';
import mainPage from '../pages/mainPage';
import card from '../pages/card';

beforeEach(function() {
  cy.visit(Cypress.env('host'));
});

describe('MAIN PAGE and USER JOURNEY', () => {
  context('MAIN PAGE ACTIONS', () => {
    it('check if number of cards = 10', () => {
      mainPage.countNumOfCards().should('eq', 10);
    });
  });

  context('USER JOURNEY', () => {
    it.only('user logs in and books a tour', () => {
      mainPage.getRandomCardAndClick();
      card.checkCardLocation();
      const tourName = card.getTourNameAsString();
      card.clickOnBookTour();
      cy.location('pathname').should('eq', '/login');
      loginPage.login('test@gmail.com', Cypress.env('default_password'));
      loginPage.elements.alert().should('have.class', 'alert--success');
      cy.location('pathname').should('eq', '/');
    });
  });
});
