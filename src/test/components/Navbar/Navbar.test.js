import { Navbar } from "../../../components/Navbar";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../../App";
describe("Navs", () => {
  test("it should render a navbar", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    let text = screen.getByText(/Home/i);
    expect(text).not.toBeNull();
  });
  test("it should render a Navbar  for a click feedback", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    let button = screen.getByTestId("feedbacks-link");
    fireEvent.click(button);

    await waitFor(() => {
      let textNew = screen.getByRole("table");
      expect(textNew).not.toBeNull();
    });
  });
});
