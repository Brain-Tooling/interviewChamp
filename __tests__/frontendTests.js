import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { test, expect, describe, jest, beforeEach } from "@jest/globals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";

import App from "../src/App";
import LoginPage from "../src/pages/login/LoginPage";

describe("Front-end Testing", () => {
  

  test("renders the header text", () => {
    render(<LoginPage/>)
    const button = screen.getByRole("button", {name: "Click me to go to dashboard"})
    expect(button).toBeInTheDocument()
  });

  test("renders the correct number of buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });
});
