describe('Pet Selection Process', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', '/api/pets').as('getPets');
    cy.wait('@getPets');
  });

  it('should display PetInfo and CatHealthTracker when a pet is selected', () => {
    // Click on the dropdown trigger to open the dropdown
    cy.get('[data-cy="select-trigger"]').click();

    // Now select the first pet option
    cy.get('[data-cy="pet-option"]').first().click();

    // Verify that PetInfo and CatHealthTracker are visible
    cy.get('.pet-info').should('be.visible');
    cy.get('.cat-health-tracker').should('be.visible');
  });
});