Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Sign in user and logout", () => {
    it("passes.", () => {

        // Visit the app root
        cy.visit("http://localhost:3000/login");
        cy.wait(2000);

        // fill in the form
        cy.findByRole("textbox", { name: /email/i }).type("aroble@gmail.com");
        cy.findByLabelText(/password/i).type("12345");

        // submit the form
        cy.findByRole('button', { name: /log in/i }).click();

        // wait for the page to load
        cy.wait(5000);

        // logout
        cy.findByText(/menu/i).click()
        cy.wait(2000);
        cy.findByText(/logout/i).click()

    });
});
