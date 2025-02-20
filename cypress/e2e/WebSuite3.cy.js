/// <reference types="cypress" />
import { HomePage } from "../page/homePage";

const homePage = new HomePage();
/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/
const today = new Date().getDate();
const date = new Date();
const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
  date.getMonth() + 1
).padStart(2, "0")}/${String(date.getFullYear()).slice(-2)}`;

describe("Test Suite 1", { defaultCommandTimeout: 10000 }, () => {
  beforeEach(() => {
    //Optional
    cy.visit("https://www.pawshake.com.sg");
  });

  it("Test Case 1 - Validate Search Filter", () => {
    const service = ["Doggy Day Care", "Dog Walking"];
    const randomService = service[Math.floor(Math.random() * service.length)];

    const area = [
      "Dog Boarding One-north Crescent",
      "One-North Gateway",
      "One-North Link",
    ];
    const randomArea = area[Math.floor(Math.random() * area.length)];

    //filter service
    homePage.searchArea("I’m looking for");
    homePage.selectService(randomService);
    // filter location
    homePage.searchArea("Near");
    homePage.selectLocation(randomArea);
    //filter property type
    homePage.searchArea("On");
    homePage.selectDate(today);

    //search and validate
    homePage.clickSearchButton();
    homePage.validateResult(randomService, randomArea, formattedDate);
  });
});
