declare namespace Cypress {
    interface Chainable {
        createSuccessfulCommentByPostId(postId: number, body: string, title: string, email: string): void;
    }
};

Cypress.Commands.add('createSuccessfulCommentByPostId', (postId, body, title, email) => {
    cy.request('POST', `https://jsonplaceholder.cypress.io/post/${postId}/comments`, { body, title, email })
        .then(res => {
            expect(res).to.have.property('status', 201);
            expect(res.body).to.have.property('body', body);
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('postId');
        });
});