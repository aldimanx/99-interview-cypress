export class GeneralPage {
  clickText(text) {
    cy.contains(text).click();
  }

  searchItem(items) {
    cy.get(`[id="head_sch_str"]`).first().type(items);
    cy.get(`[type="submit"]`).first().click();
  }
}
