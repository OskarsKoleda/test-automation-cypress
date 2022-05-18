declare namespace Cypress {
    interface Chainable {
        searchAndClick(searchString: string, postName: string): void;
    }
};

Cypress.Commands.add('searchAndClick', (searchString, expectedPostName) => {
    cy.get('.icon-search').click();
    cy.get('input[placeholder="Start typing to search..."]').type(searchString);
    cy.get('.kleo-ajax-part').contains(new RegExp("^" + expectedPostName + "$")).click();
});