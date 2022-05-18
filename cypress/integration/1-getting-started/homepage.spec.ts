beforeEach(function () {
    cy.visit(Cypress.env('misc').baseUrl);
    cy.login(Cypress.env('user').usar, Cypress.env('user').pazz);
});

afterEach(function () {
    cy.get('.logout-button > a').click();
});


describe('title page related tests', () => {

    it('should check that homepage title topic could be found in the list of all news', () => {
        cy.get('.eg-front-page-featured-grid-element-1').eq(0).then(topNews => {
            const topNewsText = topNews.text();
            cy.searchAndClick(topNewsText, 'Wellbeing May');
            cy.get('.article-title.entry-title').should('have.text', topNewsText);
        });
    });


    it('should assert amount of links in the Tools drop down menu', () => {
        cy.contains('Tools').trigger('mouseover');
        cy.get('.dropdown-menu > li > a').should('have.length', 14);
    });
});