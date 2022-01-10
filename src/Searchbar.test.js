import { render, screen } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("searchbar component", () => {
    test("renders the heading as expected", () => {
        render(<Searchbar />);
        expect(screen.getByText("Insert a city name to get its weather forecast")).toBeInTheDocument();
    })
} )