class Signup {
  elements = {
    name: () => cy.get('#signup-name'),
    email: () => cy.get('#signup-email'),
    password: () => cy.get('#signup-password'),
    passwordConfirm: () => cy.get('#signup-passwordConfirm'),
    signupBtn: () =>
      cy
        .get('button.btn')
        .contains('Sign up')
        .click()
  };

  signup(fullName, email, pass, passConfirm) {
    this.elements.name().type(fullName);
    this.elements.email().type(email);
    this.elements.password().type(pass);
    this.elements.passwordConfirm().type(passConfirm);
    this.elements.signupBtn().click();
    cy.location('pathname').should('eq', '/');
  }
}

module.exports = new Signup();
