import {Header} from "../../pageObjects/Components/Header";

describe("Header.cy.ts", () => {
    const {
        ItShouldHaveALogo,
        ItShouldHaveANavBar,
        ItShouldShowTheNavBarLinks,
        ItShouldHaveASearch,
        ItShouldHaveAMobileNav
    } = new Header();

    beforeEach(() => cy.visit("/"));

    it("should have a logo", () => ItShouldHaveALogo());

    it("should have a navbar", () => ItShouldHaveANavBar());

    it("should show the navbar links", () => ItShouldShowTheNavBarLinks());

    it("should have a search", () => ItShouldHaveASearch());

    it("should have a mobile nav", () => ItShouldHaveAMobileNav());
});