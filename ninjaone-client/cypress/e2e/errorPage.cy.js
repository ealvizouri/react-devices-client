/// <reference types="cypress" />

describe('Testing error page', () => {
  it('Goes to an unexisting page and the Error page \'404 - NOT FOUND\' opens', () => {
    cy.visit(cy.config().baseUrl + 'unexsiting-page');

    cy.get('h3')
      .should('have.text', '404');
    cy.get('h3 + p')
      .contains('not found', { matchCase: false });

    cy.get('p + a')
      .contains('go to dashboard', { matchCase: false })
      .click();

    cy.url().should('eq', cy.config().baseUrl);
  });
})
