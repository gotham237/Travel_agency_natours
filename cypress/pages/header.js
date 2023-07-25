/*eslint-disable*/

class Header {
  elements = {
    logoLink: () => cy.get('a.nav__el').eq(0),
    loginLink: () => cy.get('a.nav__el').eq(1),
    signupLink: () => cy.get('a.nav__el').eq(2)
  };

  clickOnLogin() {
    this.elements.loginLink().click();
  }

  clickOnSignup() {
    this.elements.signupLink().click();
  }

  clickOnLogoAndCheckLocation() {
    this.elements.logoLink().click();
    cy.location('pathname').should('equal', '/');
  }
}

module.exports = new Header();
