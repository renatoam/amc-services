import Title from "@home/components/title";
import { render, screen } from "@testing-library/react";

describe("test for rendering title in homepage", () => {
  it('should renders "Homepage" in its title component', () => {
    render(<Title>Homepage</Title>);

    expect(screen.getByText(/Homepage/)).toBeInTheDocument();
  });
});
