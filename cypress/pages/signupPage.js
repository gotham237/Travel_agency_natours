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
        .click(),
    alert: () => cy.get('.alert')
  };

  signup(fullName, email, pass, passConfirm) {
    this.elements.name().type(fullName);
    this.elements.email().type(email);
    this.elements.password().type(pass);
    this.elements.passwordConfirm().type(passConfirm);
    this.elements.signupBtn().click();
  }

  checkMessage(cls, email) {
    this.elements
      .alert()
      .should('have.class', cls)
      .and('contain', email);
    cy.wait(1000);
    this.elements.alert().should('not.exist');
  }
}

module.exports = new Signup();
