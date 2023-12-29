/// <reference types="cypress" /> 
/// <reference types="@testing-library/cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Sign in user and logout", () => {
    it("passes", () => {

        // Visit the app root
        cy.visit("http://localhost:3000/login");
        cy.wait(2000);
        // navigate to login page
        // cy.getByRole("link", { email: /login/i }).click();
        // cy.getByRole('textbox', {
        //     name: /email/i
        // })

        cy.findByRole('textbox', { name: /email/i })

        // // fill in the form
        // cy.findByRole("textbox", { name: /email/i }).type("aroble@gmail.com");
        // cy.findByLabelText(/password/i).type("12345");

        // // submit the form
        // cy.findByRole('button', { name: /log in/i }).click();

        // // wait for the page to load
        // cy.wait(5000);

        // // logout
        // cy.findByText(/logout/i).click()

    });
});
