/// <reference types="cypress" />
import { HomePage } from "../page/homePage";

const homePage = new HomePage();
/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 1", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("s is not defined")) {
        return false;
      }
    });
    //Optional
    cy.visit("https://www.pawshake.com.sg");
  });

  it(
    "Test Case 1 - Validate Project Listing Cards",
    { defaultCommandTimeout: 30000 },
    () => {
      cy.contains("Blog")
        .parent("div")
        .siblings("div")
        .children("a")
        .as("cards");

      cy.get("@cards")
        .should("have.length.greaterThan", 0)
        .each(($card, index) => {
          if (index >= 2) {
            return false; // Stop looping after 2 iterations
          }

          cy.get("@cards")
            .eq(index)
            .children("span")
            .children("div")
            .children("h3")
            .invoke("text") // Extract the text
            .then((text) => {
              const trimmedText = text.trim();
              cy.log(trimmedText);
              cy.get("@cards")
                .eq(index)
                .scrollIntoView()
                .should("be.visible")
                .invoke("removeAttr", "target")
                .click({ force: true });

              cy.url().should("include", $card.attr("href"));
              cy.get("h1").children("span").should("have.text", trimmedText);
            });
          cy.go("back");
        });
    }
  );
});
