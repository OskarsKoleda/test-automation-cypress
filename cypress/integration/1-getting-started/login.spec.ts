describe('login test', () => {

    it('should display error message in case of wrong password', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('wrongPazz'));
        cy.contains('Login').click();
        cy.get('.errors').last().should((elem) => {
            expect(elem.text()).to.equal('Invalid credentials.');
        });
    });

    it('should contain attribute with user name on homepage', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').click();
        cy.get('.bp-tooltip')
            .first()
            .should('have.attr', 'data-bp-tooltip', 'Oskars Koleda');
        cy.get('.logout-button > a').click();
    });

    it('should contain attribute with user name on home page and on logout should contain logout success message', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').click();
        cy.get('.bp-tooltip')
            .first()
            .should('have.attr', 'data-bp-tooltip', 'Oskars Koleda');
        cy.get('.logout-button > a').click()
        cy.get('#msg > h2').should(el => {
            expect(el.text()).to.equal('Logout successful');
        });
        cy.get('#msg > p').should(el => {
            expect(el.text()).to.equal('For security reasons, exit your web browser.');
        });
    });

});