/// <reference types="vitest" />
import { describe, it, expect, vi } from "vitest";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders children", () => {
    const { getByText } = render(<Tag>Example</Tag>);
    expect(getByText("Example")).toBeInTheDocument();
  });

  it("renders removable button when requested and calls onRemove", () => {
    const onRemove = vi.fn();
    const { getByLabelText } = render(
      <Tag removable onRemove={onRemove} removeLabel="Remove label">
        Rem
      </Tag>
    );
    const btn = getByLabelText("Remove label");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onRemove).toHaveBeenCalled();
  });

  it("does not render remove button when not removable", () => {
    const { queryByRole } = render(<Tag>Not removable</Tag>);
    expect(queryByRole("button")).toBeNull();
  });
});
