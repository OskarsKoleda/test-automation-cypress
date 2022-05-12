declare namespace Cypress {
    interface Chainable {
        login(username: string, password: string): void;
    }
}

Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password, { log: false });
    cy.contains('Login').click();
})