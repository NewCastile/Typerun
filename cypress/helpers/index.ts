import { NO_ANSWER_PLACEHOLDER } from "../../constants";

export const checkIfAnyEmptyText = (selector: string) => {
  cy.get(selector).each((el) => {
    expect(el.text()).length.gt(0);
  });

  cy.get(selector).each((el) => {
    expect(el.text()).to.not.be.eq("");
  });
};

export const checkIfWordUnanswered = (selector: string) => {
  cy.get(selector).each((el) => {
    expect(el.text()).to.be.eq(NO_ANSWER_PLACEHOLDER);
  });
};

export const convertToNum = ({ text, digits = 2 }: { text: string; digits?: number }): number => {
  return Number(parseFloat(text).toFixed(digits));
};
