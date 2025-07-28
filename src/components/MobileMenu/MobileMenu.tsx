"use client";

import type {FC} from "react";
import {useState} from "react";
import Link from "next/link";
import {SiteLinks} from "@nb.frontend/helpers/Misc/SiteLinks";
import Search from "@nb.frontend/components/Search/Search";

const HeaderMobileMenu: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                data-element-name={"menu"}
                className={"md:hidden text-sm font-medium text-text"}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? "Close" : "Menu"}
            </button>
            {isOpen && (
                <div className={"md:hidden w-full h-screen fixed bg-background left-0 top-15 border-t border-gray-300"}>
                    <div className={"bg-gray-100 p-3 pl-5"}>
                        <Search />
                    </div>
                    <nav
                        data-element-name={"mobile-nav"}
                        className={"border-t border-gray-200 px-2 bg-white"}
                    >
                        {SiteLinks.navLinks.map((link) => (
                            <Link
                                key={link}
                                href={`/${link.toLowerCase()}`}
                                className={"block w-full text-left border-b border-gray-200  px-4 py-3 font-medium hover:underline transition-colors text-base duration-200"}
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default HeaderMobileMenu;
