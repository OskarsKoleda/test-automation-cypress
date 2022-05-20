describe('check comments API', () => {
    it('should create comment via API call', () => {
        const comment = 'I like this very much!';
        const title = 'Positive review';
        const email = 'cypress@xmail.com';
        cy.createSuccessfulCommentByPostId(1, comment, title, email);
    });
});