import {render, screen, fireEvent} from "@testing-library/react";
import Button from "@nb.frontend/components/Button/Button";

describe("Button component", () => {
    it("calls onClick when clicked", () => {
        const handleClick = jest.fn();

        render(<Button onClick={handleClick} label="Click Me" />);
        fireEvent.click(screen.getByText("Click Me"));

        expect(handleClick).toHaveBeenCalled();
    });
});
