import {CyObjects} from "../CyObjects";

export class Footer extends CyObjects{
    ItShouldHaveAFooter: () => void = () => {
        this.GetElement("footer").should("exist");
    };
}