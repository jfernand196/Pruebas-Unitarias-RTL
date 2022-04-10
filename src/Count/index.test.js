import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Count from "./index";

describe("render initial", () => {
  test("number = 0", () => {
    render(<Count />);
    screen.getByText(0);
  });
});

describe(" add 1 with click", () => {
  test("number = 1", () => {
    render(<Count />);
    const btn = screen.getByText("+");
    fireEvent.click(btn);
    screen.getByText(1);
  });
});

describe(" subtracting 1 with click", () => {
  test("number = -1", () => {
    render(<Count />);
    const btn = screen.getByText("-");
    fireEvent.click(btn);
    screen.getByText(-1);
  });
});

describe(" reset with click", () => {

  test("number = 0", () => {
    render(<Count />);
    const btn = screen.getByText("RESET");
    fireEvent.click(btn);
    screen.findByText(0);
  });
});
