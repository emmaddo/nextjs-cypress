import type {IFooterLinks} from "@nb.frontend/helpers/Types/IFooterLinks";

const footerLinks: IFooterLinks<string>[] = [
    {
        name: "About",
        path: "about",
    },
    {
        name: "Privacy Policy",
        path: "privacy-policy",
    },
    {
        name: "Team",
        path: "team",
    },
    {
        name: "Blog",
        path: "blog",
    },
    {
        name: "Contact",
        path: "contact",
    }
];

export class AppLinks {
    static getFooterLinks: () => IFooterLinks<string>[] = () =>
        footerLinks;
}