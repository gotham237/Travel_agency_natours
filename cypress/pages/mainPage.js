class MainPage {
  elements = {
    cards: () => cy.get('.card')
  };

  getNumOfCards() {
    return this.elements.cards().its("length");
  }

  getRandomCardAndClick() {
    this.elements.cards().then($cards => {
      const numberOfCards = $cards.length;
      const randomIndex = Cypress._.random(numberOfCards - 1);
      cy.wrap($cards).eq(randomIndex).find('a').should("contain", "Details").click();
    });
  }

  getCardAndClick(num) {
    this.elements.cards().eq(num).contains('Details').click();
  }
}

module.exports = new MainPage();
