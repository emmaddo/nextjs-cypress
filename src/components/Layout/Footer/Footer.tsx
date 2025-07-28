import type {FC} from "react";
import Logo from "@nb.frontend/assets/icons/Logo";
import {AppLinks} from "@nb.frontend/helpers/Misc/AppLinks";
import Link from "next/link";

const Footer: FC = () => {
    return (
        <footer className={"w-full flex flex-col md:flex-row items-center justify-between p-4 border-t-2 border-black"}>
            <Logo
                className={"w-8 h-8 fill-black"}
                data-element-name={"site-logo"}
            />
            <div
                className={"flex flex-row gap-4"}
                data-element-name={"footer-links"}
            >
                {
                    AppLinks.getFooterLinks().map(({path, name}, index) => (
                        <Link
                            key={index}
                            href={`/${path}`}
                            data-element-name={"footer-link"}
                        >
                            {name}
                        </Link>
                    ))
                }
            </div>
        </footer>
    );
};

export default Footer;