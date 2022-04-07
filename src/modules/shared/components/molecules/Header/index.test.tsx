import { render, screen } from "@testing-library/react";
import Header from ".";

describe("testing application header", () => {
  it("should be in the Document", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  });

  it('should have child with text "Especialidades"', () => {
    render(<Header />);
    const specialties = screen.getByText(/Especialidades/i);

    expect(specialties).toBeInTheDocument();
  });

  it('should have child with text "Atendimento"', () => {
    render(<Header />);
    const attendance = screen.getByText(/Atendimento/i);

    expect(attendance).toBeInTheDocument();
  });

  it('should have child with text "Serviços"', () => {
    render(<Header />);
    const services = screen.getByText(/Serviços/i);

    expect(services).toBeInTheDocument();
  });

  it('should have child with text "Contato"', () => {
    render(<Header />);
    const contact = screen.getByText(/Contato/i);

    expect(contact).toBeInTheDocument();
  });
});
