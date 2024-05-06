import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  test("Should load the heading inside contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load the button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load the input name inside the contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load two input boxes inside the contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
