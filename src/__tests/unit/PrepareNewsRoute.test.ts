import {PrepareNewsRoute} from "@nb.frontend/services/api/GetArticleAsync";

describe("PrepareNewsRoute.test.ts", () => {
    const path = PrepareNewsRoute();

    it("should contain the api host", () => expect(path).toContain(process.env.API_HOST));

    it("should contain the api key", () => expect(path).toContain(process.env.API_KEY_1));

    it("should contain a set list of countries", () => {
        expect(path).toContain("&country=au,us,gb");
    });
});