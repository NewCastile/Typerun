import { WORDS } from "../constants";

describe("Game", () => {
  it("Simulates network disconnection while playing the game", () => {
    cy.visit("http://localhost:3000");
    assertOnline();
    goOffline();
    assertOffline();

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

    cy.get("[data-testid='loading-results-panel']", { timeout: 10000 })
      .should("be.visible")
      .then(() => {
        goOnline();
      });
  });
});

const goOffline = () => {
  cy.log("**go offline**")
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.enable",
      });
    })
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: true,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      });
    });
};

const goOnline = () => {
  // disable offline mode, otherwise we will break our tests :)
  cy.log("**go online**")
    .then(() => {
      // https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: false,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      });
    })
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.disable",
      });
    });
};

const assertOnline = () => {
  return cy.wrap(window).its("navigator.onLine").should("be.true");
};

const assertOffline = () => {
  return cy.wrap(window).its("navigator.onLine").should("be.false");
};
