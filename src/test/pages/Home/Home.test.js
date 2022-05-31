import { Navbar } from "../../../components/Navbar";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../../../pages/Home";

describe("Home Page", () => {
  test("it should render a navbar", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    let text = screen.getByText(/Home/i);
    expect(text).not.toBeNull();
  });
  test("it should render a Feedbacks page and click Home Page", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    let img = screen.getByRole("img");
    expect(img).not.toBeNull();
  });

  test("it should render a Home page and FeedBackyModal render", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    let modal = screen.getByRole("button");
    expect(modal).not.toBeNull();
  });

  test("it should render a Home page and FeedBackyModal click open modal", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    let modal = screen.getByRole("button");
    fireEvent.click(modal);
    await waitFor(() => {
      const text = screen.getByText(/Send Your FeedBack/i);
      expect(text).not.toBeNull();
    });
  });
});
