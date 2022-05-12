beforeEach(function () {
    cy.visit(Cypress.env('misc').baseUrl);
    cy.login(Cypress.env('user').usar, Cypress.env('user').pazz);
    cy.contains('Billboard').click().get('.products').should('be.visible');

});

afterEach(function () {
    cy.get('.logout-button > a').click();
});

describe('billboard page tests', () => {

    it('check every billboard list element', () => {
        let mainTopics;
        cy.get('.products li mark')
            .then(listElements => {
                mainTopics = listElements.toArray().length;
                for (let index = 0; index < mainTopics; index++) {
                    // just visit
                    cy.get('.products li mark').eq(index).click();
                    cy.go('back');
                };
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