/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 1", { defaultCommandTimeout: 30000 }, () => {
  beforeEach(() => {
    //Optional
    cy.visit("https://www.pawshake.com.sg");
  });

  it.only("Validate H2 method 1", () => {
    const expectedHeadingsH2 = [
      "Who treats your pet like family",
      "Here's how Pawshake works",
      "Happiness guaranteed",
      "Services on Pawshake",
      "Why choose Pawshake?",
      "Blog",
      "Frequently Asked Questions",
      //"Learn more", it H3!
      //"Popular Cities", not available
      //"About Pawshake", not available
      //"Payment Methods", it H3!
      //"Find us on", it H3!
    ];
    expectedHeadingsH2.forEach((heading) => {
      cy.get("h2").contains(heading).should("be.visible");
    });
  });

  it("Validate H2 method 2", () => {
    cy.get("h2").contains("Who treats your pet like family").should("exist");
    cy.get("h2").contains("Here's how Pawshake works").should("exist");
    cy.get("h2").contains("Happiness guaranteed").should("exist");
    cy.get("h2").contains("Services on Pawshake").should("exist");
    cy.get("h2").contains("Why choose Pawshake?").should("exist");
    cy.get("h2").contains("Blog").should("exist");
    cy.get("h2").contains("Frequently Asked Questions").should("exist");
  });
});
