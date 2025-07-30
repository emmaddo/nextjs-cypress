import {AppSettings} from "../../src/helpers/Misc/AppSettings";
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();

describe("Homepage", () => {
  beforeEach(() => {
    homePage.visit();
  });

    it("should ensure articles are present or show error notice", () => {
    homePage.verifyNewsOrErrorContent(); 
  });

   it("should have the correct page metadata", () => {
    cy.title().should("eq", AppSettings.Title);
    homePage.getMetaDescription().should("have.attr", "content", AppSettings.Description);
  });

  it("should display article description", () => {
  homePage.getNewsDescription()
    .should("have.length.at.least", 1) 
    .first()
    .should("be.visible") 
    .invoke("text")
    .should("not.be.empty"); 
});

  it("should display article publication date", () => {
    homePage.getNewsPubDate().first().should("exist").and("be.visible");
    homePage.getNewsPubDate().first().invoke("text").should("match", /^[A-Za-z]+, \d{1,2}(st|nd|rd|th) [A-Za-z]+ \d{4}$/);
  });

  it("should display article source", () => {
    homePage.getNewsSource().first().should("exist").and("be.visible");
    homePage.getNewsSource().first().invoke("text").should("not.be.empty"); 
  });
});