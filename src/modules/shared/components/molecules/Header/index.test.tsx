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

  it("should contains all four the links inside", () => {
    render(<Header />);
    const link = screen.getAllByRole("link");

    expect(link).toHaveLength(4);
  });

  it("should have a links to #specialties", () => {
    render(<Header />);
    const link = screen.getByTitle("Especialidades");

    expect(link).toHaveAttribute("href", "/#specialties");
  });

  it("should have a links to #attendance", () => {
    render(<Header />);
    const link = screen.getByTitle("Atendimento");

    expect(link).toHaveAttribute("href", "/#attendance");
  });

  it("should have a links to #services", () => {
    render(<Header />);
    const link = screen.getByTitle("Serviços");

    expect(link).toHaveAttribute("href", "/#services");
  });

  it("should have a links to #contact", () => {
    render(<Header />);
    const link = screen.getByTitle("Contato");

    expect(link).toHaveAttribute("href", "/#contact");
  });
});
