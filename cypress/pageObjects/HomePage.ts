import {CyObjects} from "./CyObjects";

class HomePage {
  private cyObjects = new CyObjects();

  private newsArticleContainerSelector = "div[data-element-name=news-article-container]";
  private newsTitleSelector = "h1[data-element-name=news-title]";
  private newsErrorNoticeSelector = "div[data-element-name=news-error-notice]";
  private metaDescriptionSelector = 'meta[name="description"]';
  private newsDescriptionSelector = "p[data-element-name=news-description]";
  private newsPubDateSelector = "p[data-element-name=news-pubdate]";
  private newsSourceSelector = "p[data-element-name=news-source]";

  getNewsArticleContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.cyObjects.GetElement(this.newsArticleContainerSelector);
  }

  getNewsTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.cyObjects.GetElement(this.newsTitleSelector);
  }

  getNewsErrorNotice(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.cyObjects.GetElement(this.newsErrorNoticeSelector);
  }

  getMetaDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.cyObjects.GetElement(this.metaDescriptionSelector);
  }

   getNewsDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.cyObjects.GetElement(this.newsDescriptionSelector);
  }

  getNewsPubDate(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.cyObjects.GetElement(this.newsPubDateSelector);
  }

  getNewsSource(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.cyObjects.GetElement(this.newsSourceSelector);
  }

  visit(): Cypress.Chainable<Cypress.AUTWindow> {
    return cy.visit("/");
  }

  verifyNewsOrErrorContent(): void {
        this.getNewsArticleContainer().find(this.newsTitleSelector).should("be.visible");
        this.getNewsArticleContainer().should("have.class", "active-news");
        cy.get(this.newsErrorNoticeSelector).should("not.exist");
    }
}

export default HomePage;