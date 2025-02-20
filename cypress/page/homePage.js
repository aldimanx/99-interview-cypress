export class HomePage {
  searchArea(filter) {
    cy.contains("b", filter).should("be.visible").click();
  }

  selectService(service) {
    cy.get('[aria-label="Suggestions"]').should("be.visible");
    cy.get('[role="option"]').find("div div div").contains(service).click();
    cy.contains("b", "I’m looking for")
      .parent()
      .find("div")
      .contains(service)
      .should("be.visible");
  }

  selectLocation(location) {
    cy.get('[placeholder="Search a location"]').type(location);
    cy.get(`[data-value="${location}, Singapore"]`)
      .should("be.visible")
      .type("{enter}");
    cy.contains("b", "Near")
      .parent()
      .find("span")
      .contains(location + ", Singapore");
  }

  selectDate(date) {
    cy.get(`[name="day"]`).contains(date).eq(0).click();
    cy.contains("Apply days").click();
  }

  clickSearchButton() {
    cy.get(`[data-test-id="home.header.searchCta"]`).click({ force: true });
  }

  validateResult(service, location, dates) {
    cy.contains("b", "Service")
      .parent()
      .find("button span div")
      .contains(service)
      .should("be.visible");

    cy.contains("b", "Location")
      .parent()
      .find("div div input")
      .should("have.value", location + ", Singapore");

    cy.contains("b", "Dates")
      .parent()
      .find("div button div input")
      .should("have.value", dates);
  }
}
