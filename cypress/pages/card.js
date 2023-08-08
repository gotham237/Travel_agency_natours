class Card {
  elements = {
    bookTourBtnToLogin: () => cy.contains('Log in to book tour'),
    tourName: () => cy.get('.heading-primary'),
    bookTourBtn: () => cy.get('button').contains('Book tour now!')
  };

  clickOnBookTourToLoginBtn() {
    this.elements.bookTourBtnToLogin().click();
  }

  clickOnBookTourBtn() {
    this.elements.bookTourBtn().click();
  }

  getTourName() {
    return this.elements.tourName().invoke('text');
  }

  getTourNameAsString() {
    return this.getTourName().then(tourName => tourName.trim());
  }

  // I am getting name of the tour e.g. 'The Sports Lover Tour' and perform some actions to have 'the-sports-lover'
  // and check if the location is correct
  checkCardLocation() {
    this.getTourName().then(text => {
      const tourName = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .slice(0, -5);
      cy.location('pathname').should('eq', `/tour/${tourName}`);
    });
  }
}

module.exports = new Card();
