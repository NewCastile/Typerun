describe("Game", () => {
  it("Navigates to a non-existing page then to an existing page", () => {
    cy.visit("http://localhost:3000").then(() => cy.wait(1000));

    cy.visit("http://localhost:3000/foo", { failOnStatusCode: false }).then(() => cy.wait(4000));

    cy.get("[data-testid='go-back-button']").click();

    cy.get("[data-testid='game-starter-panel']", { timeout: 10000 }).should("be.visible");

    cy.get("[data-testid='about-page-link']").click();

    cy.get("[data-testid='about-page-content']").should("be.visible");
  });
});
