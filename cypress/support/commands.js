// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('sliderFix', (min, max) => {
    const leftHandle = cy.get('.iToJ4v.Kaqq1s');
    const rightHandle = cy.get('.iToJ4v.D0puJn');
    leftHandle.trigger('mousedown').trigger('mousemove', { clientX: 130 }).trigger('mouseup');
    rightHandle.trigger('mousedown').trigger('mousemove', { clientX: 150 }).trigger('mouseup');
    cy.get('.BXgIa-').within(() => {
      cy.get('.suthUA select').should('have.value', min);
      cy.get('.tKgS7w select').should('have.value', max);
    });
    });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })