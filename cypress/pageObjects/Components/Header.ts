import {CyObjects} from "../CyObjects";
import {SiteLinks} from "../../../src/helpers/Misc/SiteLinks";

export class Header extends CyObjects{
    ItShouldHaveALogo: () => void = () => {
        this.GetElement('[data-element-name="site-logo"]').should("exist");
    };

    ItShouldHaveANavBar: () => void = () => {
        this.GetElement('[data-element-name="site-navbar"]').should("exist");
    };

    ItShouldShowTheNavBarLinks: () => void = () => {
        this.GetElement('[data-element-name="site-navbar"]').within(() => {
            SiteLinks.navLinks.map((link) => {
                cy.contains(link).should("be.visible");
            });
        });
    };

    ItShouldHaveASearch: () => void = () => {
        this.GetElement('[data-element-name="search"]').should("exist");
    };

    ItShouldHaveAMobileNav: () => void = () => {
        cy.viewport("iphone-6");
        cy.get('[data-element-name="menu"]').click();
        this.GetElement('[data-element-name="mobile-nav"]').should("exist");
    };
}
