import 'cypress-axe';

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', '/api/pets').as('getPets');
    cy.wait('@getPets');
    cy.injectAxe();
  });

  it('Should have no accessibility violations', () => {
    cy.checkA11y();
  });
});
