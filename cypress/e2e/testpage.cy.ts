describe("Testing the TestPage Component", ()=>{
    beforeEach(() => {
        cy.visit("/TestPage");
    });

    it("should contain counter and be visible", () => {
        cy.get('[data-element="counter"]').should("be.visible").and("have.text", "0");
    });

    it("should have a button that contain texts Start Counting", () => {
        cy.get('[data-element="button"]').should("be.visible").and("have.text", "Start Counting");
    });

    it("click the button and have new value to be 1", () => {
        cy.get('[data-element="button"]').click();
        cy.get('[data-element="counter"]').should("be.visible").and("have.text", "1");
    });

});