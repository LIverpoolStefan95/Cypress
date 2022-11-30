/// <reference types="Cypress" />

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
    cy.get("#first-name").type("Stefan");
    cy.get("#last-name").type("Runjic");
    cy.get("#email").type("neki_mej@test.com");
    cy.get("#password").type("Qwerty123!");
    cy.get("#password-confirmation").type("Qwerty123!");
    cy.get("input[type='checkbox']").check();
    cy.get("button").click();
    cy.url().should("not.include", "/register");
});

});