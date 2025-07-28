export class CyObjects {
    GetElement = (name: string): Cypress.Chainable<JQuery<HTMLElement>>=>
        cy.get(name);
}