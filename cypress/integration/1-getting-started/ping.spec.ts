// **Run once before each test case**
beforeEach(function(){
  console.log('see.. this function is run EACH time');
})

// describe() are:
// - commonly known as test suites, which contains test cases
// - merely groups, and you can have groups within groups
describe('Ping test', () => {

  // **Only 1 test case (in a nameless test suite)**
  it('Ping web page', () => {
      // how to use env variables
      cy.visit(Cypress.env('baseUrl'));
      cy.get('#username').type(Cypress.env('usar'));
      // use log false to hide password from cypress logs
      cy.get('#password').type(Cypress.env('pazz'), { log: false });

      // simple click action example
      cy.contains('Login').click();

      cy.get('#profile > .avatar-block').click();

      // variable using pure typescript
      const userName = Cypress.env('usar').replace('.', "-");

      // example with text contains assertion
      cy.get('.user-nicename').contains(userName);
      // example using arrow function to manipulate element as object
      cy.get('.user-nicename').contains(userName).should((elem) => {
          expect(elem.text()).to.equal('@' + userName);
      });
  })

});