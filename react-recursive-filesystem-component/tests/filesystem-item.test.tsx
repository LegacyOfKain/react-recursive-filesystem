import { render, waitFor } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { FilesystemItem, Node } from "../src";

describe("FilesystemItem", () => {
  const mockFolder: Node = {
    name: "Root",
    type: "folder",
    children: [
      { name: "File1.txt", type: "file" },
      {
        name: "Subfolder",
        type: "folder",
        children: [
          { name: "SubFile1.txt", type: "file" },
          { name: "SubFile2.txt", type: "file" },
        ],
      },
    ],
  };

  it("renders the root folder and its contents", async () => {
    render(<FilesystemItem node={mockFolder} />);

    await waitFor(() => {
      expect(screen.getByText("Root")).toBeInTheDocument();

      // The queryBy* queries return null if the element is not found, which is what you want in this case.
      expect(screen.queryByText("File1.txt")).not.toBeInTheDocument();
      expect(screen.queryByText("Subfolder")).not.toBeInTheDocument();
    });
  });

  it("expands and collapses folders on click", async () => {
    render(<FilesystemItem node={mockFolder} />);

    // Initially, subfolder contents should not be visible
    expect(screen.queryByText("SubFile1.txt")).not.toBeInTheDocument();

    // Click to expand the root folder
    let toggleButton = screen.getByTestId("toggle-Root");
    fireEvent.click(toggleButton);

    // Click to expand the subfolder
    toggleButton = screen.getByTestId("toggle-Subfolder");
    fireEvent.click(toggleButton);

    // Now subfolder contents should be visible
    await waitFor(() => {
      expect(screen.getByText("SubFile1.txt")).toBeInTheDocument();
      expect(screen.getByText("SubFile2.txt")).toBeInTheDocument();
    });

    // Click again to collapse the subfolder
    fireEvent.click(toggleButton);

    // Subfolder contents should be hidden again
    await waitFor(() => {
      expect(screen.queryByText("SubFile1.txt")).not.toBeInTheDocument();
    });
  });

  it("renders files without expand/collapse functionality", async () => {
    render(<FilesystemItem node={mockFolder.children[0]} />);

    await waitFor(() => {
      expect(screen.getByText("File1.txt")).toBeInTheDocument();
      // Ensure there's no clickable element for files
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
  });
});
