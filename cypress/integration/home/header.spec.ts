import Title from "@home/components/title";

describe("Default Application Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have a title called titulo", () => {
    cy.get("#titulo").should("have.length", 1);
  });
});
