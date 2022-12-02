/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");

describe("registration test", () => {

it("register with valid data", () => {

    function makeId(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
      let email = `${makeId(5)}@test.com`;

    cy.visit("/");
    cy.get("a[href='/register']").click();
    cy.get(locators.register.firstnameInput).type("Stefan");
    cy.get(locators.register.lastnameInput).type("Runjic");
    cy.get(locators.register.emailInput).type("neki_mej@test.com");
    cy.get(locators.register.passwordInput).type("Qwerty123!");
    cy.get(locators.register.passwordConfirmationInput).type("Qwerty123!");
    cy.get(locators.register.checkboxInput).check();
    cy.get(locators.register.button).click();
    cy.url().should("not.include", "/register");
});

});