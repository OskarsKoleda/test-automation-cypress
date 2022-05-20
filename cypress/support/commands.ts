declare namespace Cypress {
    interface Chainable {
        searchAndClick(searchString: string, postName: string): void;
        navigateToLastPage(amountOfPages: number): void;
    }
};

Cypress.Commands.add('searchAndClick', (searchString, expectedPostName) => {
    cy.get('.icon-search').click();
    cy.get('input[placeholder="Start typing to search..."]').type(searchString);
    cy.get('.kleo-ajax-part').contains(new RegExp("^" + expectedPostName + "$")).click();
});

Cypress.Commands.add('navigateToLastPage',  (amountOfPages)=> {
    let index = 1;
    do {
        cy.get('.product-details').should('have.length', Cypress.env('misc').billboardTopicPageSize);
        cy.get('.next').click();
        index++;
    } while (index < amountOfPages);
});