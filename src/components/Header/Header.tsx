import type {FC} from "react";
import Link from "next/link";
import {SiteLinks} from "@nb.frontend/helpers/Misc/SiteLinks";
import Logo from "@nb.frontend/assets/icons/Logo";
import MobileMenu from "@nb.frontend/components/MobileMenu/MobileMenu";
import Search from "@nb.frontend/components/Search/Search";

const Header: FC = () => {
    return (
        <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-200 h-16">
            <div className="max-w-7xl h-full mx-auto px-4 flex items-center justify-between">
                <Logo
                    className={"w-8 h-8 fill-black"}
                    data-element-name={"site-logo"}
                />
                <nav
                    data-element-name={"site-navbar"}
                    className="hidden md:flex space-x-6"
                >
                    {SiteLinks.navLinks.map((link) => (
                        <Link
                            key={link}
                            href={`/${link.toLowerCase()}`}
                            className="hover:underline transition-colors text-base font-medium"
                        >
                            {link}
                        </Link>
                    ))}
                </nav>
                <div className={"hidden md:flex"}>
                    <Search  />
                </div>
                <MobileMenu />
            </div>
        </header>
    );
};

export default Header;
