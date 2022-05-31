import { Navbar } from "../../../components/Navbar";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ListFeedBack } from "../../../components/ListFeedBack";
import App from "../../../App";


describe("ListfeedBack", () => {
  test("it should render a navbar", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    let text = screen.getByText(/Home/i);
    expect(text).not.toBeNull();
  });
  test("it should render a Feedbacks page", async () => {
    render(
      <BrowserRouter>
        <ListFeedBack />
      </BrowserRouter>
    );
    let text = screen.getByText(/loading/i);
    expect(text).not.toBeNull();
  });
  test("it should render a Feedbacks page and click Home Page", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    let button = screen.getByTestId("home-link");
    fireEvent.click(button);
    await waitFor(() => {
      let textNew = screen.getByRole("img");
      expect(textNew).not.toBeNull();
    });
  });
});
