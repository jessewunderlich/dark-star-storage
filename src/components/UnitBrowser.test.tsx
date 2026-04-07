import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UnitBrowser from "./UnitBrowser";

describe("UnitBrowser", () => {
  it("renders unit IDs", () => {
    render(<UnitBrowser />);
    expect(screen.getByText("A-101")).toBeInTheDocument();
    expect(screen.getByText("B-205")).toBeInTheDocument();
  });
});
