/// <reference types="Cypress"/>

describe("login test", () => {

    const locators = require("../fixtures/locators.json");

    it("login with valid credentials", () => {
        cy.visit("/")
        cy.get('a[href="/login"]');
        cy.get(locators.login.loginButton).click();
        //cy.get('input[id="email"]');
        cy.get(locators.login.emailInput).type("mika@gmail.com");
        cy.get(locators.login.passwordInput).type("Mika1234");
        cy.get(locators.login.submitButton).click();
    });

    it("logout", () => {
        //cy.wait(500);
        cy.get(".nav-link").should("have.length", 4);
        //cy.get(".nav-link").eq(3).click();

    

    });

});


