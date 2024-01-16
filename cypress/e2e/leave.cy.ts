import { WORDS } from "../constants";

describe("Leave", () => {
  it("Leaves the game and resets the values", () => {
    cy.visit("http://localhost:3000");
    cy.get("body").trigger("keyup", { code: "Space" });
    const input = cy.get("[data-testid='word-input']");

    for (let index = 0; index < WORDS.length; index++) {
      const word = WORDS[index];
      const wordFirstCharacter = word[0];

      cy.get("[data-testid='current-character']").should((el) => {
        const currentCharacter = el.text().trim().toLowerCase();

        expect(currentCharacter).to.eq(wordFirstCharacter);
      });
      input.type(word);
      input.should("have.value", word);

      if (wordFirstCharacter === "g") {
        break;
      } else {
        input.trigger("keydown", { code: "Enter" });
      }
    }

    cy.get("body").trigger("keyup", { code: "Escape" });
    cy.get("[data-testid='game-starter-panel']", { timeout: 1000 }).should("be.visible");
  });
});
