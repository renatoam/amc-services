import { screen, render } from "@testing-library/react";
import Text from "../Text";

describe("Title component", () => {
  it("should be present in the Document", () => {
    render(<Text>Texting</Text>);

    const sut = screen.getByText("Texting");

    expect(sut).toBeInTheDocument();
  });

  it("should the correct text", () => {
    render(<Text>Texting</Text>);

    const sut = screen.getByText("Texting");

    expect(sut).toHaveTextContent("Texting");
  });
});
