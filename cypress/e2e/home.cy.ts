describe('first cypress test', ()=>{
   it('should visit the landing page and checks for h2 text exists', ()=>{
    cy.visit('/');
    cy.get('h2').should('have.text', 'Welcome to Cypress Testing');
   })
})