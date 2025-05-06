export class LoginPage {
  loginForm(id, pass) {
    cy.get(`[id="mb_id"]`).type(id);
    cy.get(`[id="mb_password"]`).type(pass);
    cy.get(`[id="form-submit1"]`).click();
    cy.contains("로그아웃").should("be.visible");
  }
}
