import { faker } from "@faker-js/faker";
import { GeneralPage } from "../page/generalPage";
import { RegisterPage } from "../page/registerPage";
import { LoginPage } from "../page/loginPage";
import { PaymentPage } from "../page/paymentPage";

const generalPage = new GeneralPage();
const registerPage = new RegisterPage();
const loginPage = new LoginPage();
const paymentPage = new PaymentPage();

const fakeId = faker.person.firstName() + "123";
const password = "Testing123";
const fakeNick = faker.person.lastName() + "123";
const fakeEmail = faker.word.sample() + "123@yopmail.com";

describe("e2e user registration until payment", () => {
  beforeEach(() => {
    cy.visit("https://dev.p2u.kr/");
  });

  //cant complete regitration because there is captha
  it("register", () => {
    generalPage.clickText("로그인");
    generalPage.clickText("회원가입");
    registerPage.confirmationPage();
    registerPage.inputId(fakeId);
    registerPage.inputPassword(password);
    registerPage.inputName("Aldiansyah");
    registerPage.inputNick(fakeNick);
    registerPage.inputEmail(fakeEmail);
    registerPage.inputPhone("821012345678");
    registerPage.inputAddress("10210", "jakarta");
    registerPage.submitForm();
  });

  it("login", () => {
    generalPage.clickText("로그인");
    loginPage.loginForm("tesohuafasf", "Testing123");
  });

  it("bank transfer payment", () => {
    generalPage.clickText("로그인");
    loginPage.loginForm("tesohuafasf", "Testing123");
    generalPage.searchItem("컬러 스트라이프 부클 토트백");
    paymentPage.selectItem();
    paymentPage.selectOptional();
    paymentPage.buyNow();
    paymentPage.selectLocation();
    paymentPage.selectBankPayment("KB국민은행", "2131321423131");
    paymentPage.validatePayment();
  });
});
