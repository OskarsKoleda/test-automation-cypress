beforeEach(function () {
    cy.visit(Cypress.env('misc').baseUrl);
});

describe('login test', () => {

    it('should display error message in case of wrong password', () => {
        cy.login(Cypress.env('user').usar, Cypress.env('user').wrongPazz);
        cy.get('.errors').last().should((elem) => {
            expect(elem.text()).to.equal('Invalid credentials.');
        });
    });

    it('should contain attribute with user name on homepage', () => {
        cy.login(Cypress.env('user').usar, Cypress.env('user').pazz);

        cy.get('.bp-tooltip')
            .first()
            .should('have.attr', 'data-bp-tooltip', 'Oskars Koleda');
        cy.get('.logout-button > a').click();
    });

    it('should contain attribute with user name on home page and on logout should contain logout success message', () => {
        cy.login(Cypress.env('user').usar, Cypress.env('user').pazz);

        cy.get('.bp-tooltip')
            .first()
            .should('have.attr', 'data-bp-tooltip', 'Oskars Koleda');
        cy.get('.logout-button > a').click();
        cy.get('#msg > h2').should(el => {
            expect(el.text()).to.equal('Logout successful');
        });
        cy.get('#msg > p').should(el => {
            expect(el.text()).to.equal('For security reasons, exit your web browser.');
        });
    });

});