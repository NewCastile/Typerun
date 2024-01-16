import { WORDS } from "../constants";

describe("Game", () => {
  it("Simulates API error while fetching the definitions", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("body").trigger("keyup", { code: "Space" });

    WORDS.forEach((word) => {
      const wordFirstCharacter = word[0];

      cy.get("[data-testid='current-character']").should((el) => {
        const currentCharacter = el.text().trim().toLowerCase();

        expect(currentCharacter).to.eq(wordFirstCharacter);
      });
      cy.get("[data-testid='word-input']").type(word);
      cy.get("[data-testid='word-input']").should("have.value", word);
      cy.get("[data-testid='word-input']").trigger("keydown", { code: "Enter" });
    });

    cy.get("[data-testid='loading-results-panel']", { timeout: 1000 })
      .should("be.visible")
      .then(() => {
        cy.intercept("**/api/**/*", { forceNetworkError: true }).as("failed");

        cy.wait("@failed").should("have.property", "error");

        cy.get("[data-testid='error-result']").should("be.visible");
      });
  });
});
