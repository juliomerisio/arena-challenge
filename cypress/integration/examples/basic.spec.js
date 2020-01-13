// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

describe('Cypress basics', () => {
  it('Should visit a page and assert a title', () => {
    cy.visit(`${Cypress.config().baseUrl}`);
    cy.title().should('be.equal', 'Arena - Challenge');
  });
  it('Should redirect to the first issue of the repository', () => {
    cy.pause();
    cy.visit(`${Cypress.config().baseUrl}`);
    cy.get('[data-cy=container]')
      .first()
      .click();
    cy.get('[data-cy=container]')
      .first()
      .click();
  });
});
