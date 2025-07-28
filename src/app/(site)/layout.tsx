import type {FC} from "react";
import type {LayoutType} from "@nb.frontend/helpers/Types/LayoutType";
import Header from "@nb.frontend/components/Header/Header";
import Footer from "@nb.frontend/components/Layout/Footer/Footer";

const Layout: FC<LayoutType> = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow pt-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;