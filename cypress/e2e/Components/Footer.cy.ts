import {Footer} from "../../pageObjects/Components/Footer";

describe("Footer.cy.ts", () => {
    const {ItShouldHaveAFooter} = new Footer();

    beforeEach(() => cy.visit("/"));

    it("should have a footer", () => ItShouldHaveAFooter());
});