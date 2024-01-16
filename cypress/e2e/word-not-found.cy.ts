// A WORD THAT THE DICTIONARY API CAN'T FOUND A DEFINITION FOR IS YATE

import { AFTER_GAME_TIME, WORDS } from "../constants";
import { checkIfAnyEmptyText, convertToNum } from "../helpers";

describe("Game", () => {
  it("Completes the game and fetches the definitions with a word not found in the API", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("body").trigger("keyup", { code: "Space" });

    WORDS.forEach((word) => {
      const wordFirstCharacter = word[0];

      cy.get("[data-testid='current-character']").should((el) => {
        const currentCharacter = el.text().trim().toLowerCase();

        expect(currentCharacter).to.eq(wordFirstCharacter);
      });
      cy.get("[data-testid='word-input']").type(wordFirstCharacter === "y" ? "yate" : word);
      cy.get("[data-testid='word-input']").should(
        "have.value",
        wordFirstCharacter === "y" ? "yate" : word,
      );
      cy.get("[data-testid='word-input']").trigger("keydown", { code: "Enter" });
    });

    cy.wait(1000);
    let calculatedTotalTimeTaken = 0;

    cy.get("[data-testid='results-panel']", { timeout: 10000 }).should("be.visible");

    checkIfAnyEmptyText("[data-testid='answer-character']");
    checkIfAnyEmptyText("[data-testid='answer-title']");
    checkIfAnyEmptyText("[data-testid='answer-message']");
    checkIfAnyEmptyText("[data-testid='answer-resolution']");
    checkIfAnyEmptyText("[data-testid='answer-timetaken']");

    cy.get("[data-testid='answer-timetaken']").each((el) => {
      const text = el.text();
      const timetaken = convertToNum({ text });

      const temp = calculatedTotalTimeTaken + timetaken;

      calculatedTotalTimeTaken = convertToNum({ text: temp.toString() });
    });

    cy.get("[data-testid='total-time-taken']")
      .invoke("text")
      .then((text) => {
        const totalTimeTaken = convertToNum({ text });

        expect(totalTimeTaken).to.eq(calculatedTotalTimeTaken);
      });
    cy.wait(AFTER_GAME_TIME);
    cy.get("[data-testid='go-back-button']").click();
    cy.get("[data-testid='game-starter-panel']", { timeout: 10000 }).should("be.visible");
  });
});
