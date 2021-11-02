it('intercept body', () => {
  cy.intercept('GET', '/api/boards').as('boards');
  cy.visit('/');
});