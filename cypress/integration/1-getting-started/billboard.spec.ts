beforeEach(function () {
    cy.visit(Cypress.env('misc').baseUrl);
    cy.login(Cypress.env('user').usar, Cypress.env('user').pazz);
    cy.contains('Billboard').click().get('.products').should('be.visible');
});

afterEach(function () {
    cy.get('.logout-button > a').click();
});

describe('billboard page tests', () => {
    it('should check every billboard list element content size', () => {
        let topicSize;
        let amountOfPages;
        cy.get('.products li mark')
            .each((_, index) => {
                cy.get('.products li mark').eq(index).then(e => {
                    topicSize = +e.text().split(' ')[0];
                    amountOfPages = Math.ceil(topicSize / Cypress.env('misc').billboardTopicPageSize);
                    cy.wrap(e).click();

                    // pagination
                    if (amountOfPages === 1) {
                        cy.get('.product-details').should('have.length', topicSize);
                    } else {
                        cy.navigateToLastPage(amountOfPages);
                    };

                    // assert last page content
                    const lastPageTopicsSize = topicSize - (amountOfPages - 1) * Cypress.env('misc').billboardTopicPageSize;
                    cy.get('.product-details').should('have.length', lastPageTopicsSize);

                    // return to billboard page
                    cy.visit(`${Cypress.env('misc').baseUrl}billboard/`);
                });
            });
    });

    it('test element count for the second element', () => {
        cy.get('.products li').eq(1).find('mark').then(el => {
            const numberOfProducts = +el.text().split(' ')[0];
            cy.wrap(el).click();
            cy.get('.products li').should('have.length', numberOfProducts);
            cy.go('back');
        });
    });
});


// for reference
// cy.get('.products li mark')
// .each((elem) => {
//     cy.contains(elem.text()).click();
//     cy.go('back');
// });