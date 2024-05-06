import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {
  it("Should render header component with login button ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />;
        </Provider>
        ;
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  it("Should render header component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
  });

  it("Should render header component with cart item using regex", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
  });

  it("Should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
  });
});
