import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the home page', () => {
  cy.visit('/');
  cy.intercept('GET', '/api/pets').as('getPets');
  cy.wait('@getPets');
});

When('I open the pet selection dropdown', () => {
  cy.get('[data-cy="select-trigger"]').click();
});

When('I select a pet', () => {
  cy.get('[data-cy="pet-option"]').first().click();
});

Then('I should see the PetInfo', () => {
  cy.get('.pet-info').should('be.visible');
});

Then('I should see the CatHealthTracker', () => {
  cy.get('.cat-health-tracker').should('be.visible');
});
