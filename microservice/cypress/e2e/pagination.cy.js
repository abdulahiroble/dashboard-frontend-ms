describe("Click pagination number to show next event page", () => {
    it("passes", () => {

        // Visit the app root
        cy.visit("http://34.67.87.145/login");
        cy.wait(2000);

        // fill in the form
        cy.findByRole("textbox", { name: /email/i }).type("aroble@gmail.com");
        cy.findByLabelText(/password/i).type("12345");

        // submit the form
        cy.findByRole('button', { name: /log in/i }).click();

        // wait for the page to load
        cy.wait(10000);

        cy.findByRole('menuitem', { name: /bar\-chart consumption/i }).click();

        cy.wait(5000);

        cy.findByRole('link', { name: /table/i }).click();

        cy.wait(5000);

        cy.findByRole('listitem', { name: /3/i }).click();


        cy.wait(5000);

        cy.findByRole('listitem', { name: /497/i }).click();


        cy.wait(5000);

        cy.findByRole('listitem', { name: /1/i }).click();
    });
});
