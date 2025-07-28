import type {FC} from "react";
import Link from "next/link";
import SearchIcon from "@nb.frontend/assets/icons/SearchIcon";

const Search: FC = () => {
    return(
        <Link
            data-element-name={"search"}
            href={""}
            className={"flex justify-start md:justify-center items-center"}
        >
            <SearchIcon className={"w-7 h-7 fill-black"} />
        </Link>
    );
};

export default Search;