export class PaymentPage {
  selectItem() {
    cy.get(`[class="goods-name"]`).first().click();
    cy.url().should("include", "/item");
  }

  selectOptional() {
    cy.get(`[id="it_option_1"]`).select("옐로우,0,9997");
  }

  buyNow() {
    cy.get(`[id="sit_btn_buy"]`).click();
    cy.url().should("include", "/orderform");
  }

  selectLocation() {
    cy.get(`[id="ad_sel_addr_same"]`).click();
  }

  selectBankPayment(refund, number) {
    cy.get(`[for="od_settle_bank"]`).click();
    cy.get(`[id="od_bank"]`).select(refund);
    cy.get(`[id="od_refund_bank"]`).type(number);
    //2131321423131
    //KB국민은행
  }

  validatePayment() {
    cy.get('[class="btn_submit payment-button-bank"]').click();
    cy.contains(`모바일 지갑으로 QR 코드 전달`).should("be.visible");
  }
}
