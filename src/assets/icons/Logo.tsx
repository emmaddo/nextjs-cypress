import type {FC, ReactNode, SVGProps} from "react";

type Props = SVGProps<never>;

const Logo: FC<Props> = ({
    ...props
}): ReactNode => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            {...props}
        >
            <path d="M80-160v-80h800v80H80Zm80-160v-320h80v320h-80Zm160 0v-480h80v480h-80Zm160 0v-480h80v480h-80Zm280 0L600-600l70-40 160 280-70 40Z"/>
        </svg>
    );
};

export default Logo;