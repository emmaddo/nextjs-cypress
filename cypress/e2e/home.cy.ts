import { AppSettings } from "../../src/helpers/Misc/AppSettings";
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();

describe("Homepage - Data Display", () => {
  // Visit the page only once for this suite of tests
  before(() => {
    homePage.visit();
    // You might need a small cy.wait() here if the page takes time to load and render
    // before the first assertion, but Cypress's auto-waiting usually handles this.
    // e.g., cy.get('[data-element-name="news-article-container"]').should('be.visible');
  });

  it("should ensure articles are present and displayed correctly with correct metadata, description, publication date, and source", () => {
    // Assertions for initial load and article presence
    homePage.verifyNewsOrErrorContent();
    homePage.getNewsTitle().should("have.length.at.least", 1);
    homePage.getNewsTitle().first().should("be.visible").and("not.be.empty");

    // Assertions for page metadata
    cy.title().should("eq", AppSettings.Title);
    homePage.getMetaDescription().should("have.attr", "content", AppSettings.Description);

    // Assertions for article description
    homePage.getNewsDescription()
      .should("have.length.at.least", 1)
      .first()
      .should("be.visible")
      .invoke("text")
      .should("not.be.empty");

    // Assertions for article publication date
    homePage.getNewsPubDate().first().should("exist").and("be.visible");
    homePage.getNewsPubDate().first().invoke("text").should("match", /^[A-Za-z]+, \d{1,2}(st|nd|rd|th)? [A-Za-z]+ \d{4}$/);

    // Assertions for article source
    homePage.getNewsSource().first().should("exist").and("be.visible");
    homePage.getNewsSource().first().invoke("text").should("not.be.empty");
  });
});

// Keep the API Error Scenario in its own describe block if it needs a different setup
describe("Homepage - API Error Scenario", () => {
  beforeEach(() => {
    // This part would still need some way to *simulate* an error without hitting the real API.
    // Without mocking, this specific test case is hard to achieve reliably.
    // If you truly cannot mock, you might have to rely on a manual test or a separate environment
    // where the API is configured to return errors for testing purposes.
    // For now, this block remains as a placeholder for a non-mocked error scenario.
    // If you're hitting rate limits, this test will likely also hit it if it tries a real call.
  });

  // it("should display an error notice if API call fails", () => {
  //   // This test would require the GetArticleAsync to actually return an error,
  //   // which is difficult to control without mocking or a dedicated test environment.
  // });
});
