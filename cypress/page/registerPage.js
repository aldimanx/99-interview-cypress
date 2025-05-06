export class RegisterPage {
  confirmationPage() {
    cy.url().should("include", "/register");
    cy.get(`[id="agree_all"]`).click();
    cy.get(`[id="register-submit-one"]`).click();
    cy.url().should("include", "/register_form");
  }

  inputId(id) {
    cy.get(`[id="reg_mb_id"]`).type(id);
    cy.get(`[id="check_mb_id"]`).should("be.visible");
    cy.get(`[onclick="check_duplication('mb_id');"]`).click();
    cy.contains("사용가능한 아이디입니다.").should("be.visible");
    cy.get(`[class="confirm"]`).click();
  }

  inputPassword(password) {
    cy.get(`[id="reg_mb_password"]`).type(password);
    cy.get(`[id="reg_mb_password_re"]`).type(password);
  }

  inputName(name) {
    cy.get(`[id="reg_mb_name"]`).type(name);
  }

  inputNick(nick) {
    cy.get(`[id="reg_mb_nick"]`).type(nick);
    cy.get(`[id="check_mb_nick"]`).should("be.visible");
    cy.get(`[onclick="check_duplication('mb_nick');"]`).click();
    cy.contains("사용가능한 닉네임입니다.").should("be.visible");
    cy.get(`[class="confirm"]`).click();
  }

  inputEmail(email) {
    cy.get(`[id="reg_mb_email"]`).type(email);
    cy.get(`[id="check_mb_email"]`).should("be.visible");
    cy.get(`[onclick="check_duplication('mb_email');"]`).click();
    cy.contains("사용가능한 이메일입니다.").should("be.visible");
    cy.get(`[class="confirm"]`).click();
  }
  inputPhone(phone) {
    cy.get(`[id="reg_mb_hp"]`).type(phone);
  }

  inputAddress(zip, address) {
    cy.get(`[id="reg_mb_zip"]`).type(zip);
    cy.get(`[id="reg_mb_addr1"]`).type(address);
  }

  submitForm() {
    cy.get(`[id="recaptcha-anchor"]`).click();
    cy.get('div[class="recaptcha-checkbox-checkmark"]').click();
    cy.get(`[id="btn_submit"]`).click();
    cy.on("window:confirm", (confirmText) => {
      return true; // Accept the confirm
    });
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
