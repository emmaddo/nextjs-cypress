import type {JSX} from "react";

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const Button = ({onClick, label}: ButtonProps): JSX.Element => {
    return <button onClick={onClick}>{label}</button>;
};

export default Button;
