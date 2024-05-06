import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resMockData.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props using mock data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Chinese Wok");

  expect(resName).toBeInTheDocument();
});

it("Should render Restaurant Card component with promoted label",()=>{
    
})