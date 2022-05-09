declare namespace Cypress {
    interface Chainable {
        login(username: string, password: string): void;
    }
}

Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(Cypress.env('usar'));
    cy.get('#password').type(Cypress.env('wrongPazz'));
    cy.contains('Login').click();
})