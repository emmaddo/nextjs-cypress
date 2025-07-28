import type {Metadata} from "next";
import type {FC} from "react";
import type {LayoutType} from "@nb.frontend/helpers/Types/LayoutType";
import {inter} from "@nb.frontend/helpers/Misc/Font";
import "../styles/Index.css";
import {NBMetaData} from "@nb.frontend/helpers/Misc/NBMetaData";

export const metadata: Metadata = NBMetaData({});

const RootLayout: FC<LayoutType> = ({children}) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;