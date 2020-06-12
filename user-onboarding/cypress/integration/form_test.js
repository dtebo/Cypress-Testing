describe('My First Test', () => {
    it('Does not do much', () => {
        expect(true).to.equal(true);
    });
});

describe('My Second Test', () => {
    it('Visits my app', () => {
        cy.visit("/");
    });
});

describe('My Form', () => {
    it('Asserts that the name field is present and contains the correct value', () => {
        cy.get('[data-cy="name"]')
            .type('Darren Tebo')
            .should('be.visible')
            .should('have.value', 'Darren Tebo');
    });

    it('Asserts that the email field is present and contains the correct value', () => {
        cy.get('[data-cy="email"]')
            .type('darrentebo83@outlook.com')
            .should('have.value', 'darrentebo83@outlook.com');
    });

    it('Asserts that the password field is present and contains the correct value', () => {
        cy.get('[data-cy="password"]')
            .type('faceman')
            .should('have.value', 'faceman');
    });

    it('Asserts that the color field is present', () => {
        cy.get('[data-cy="favoriteColor"]')
            .should('be.visible')
            .invoke('val', '#44ff88')
            .trigger('input');
    });

    it('Asserts that the role is present and selectable', () => {
        cy.get('[data-cy="role"]')
            .select('designer')
            .should('have.value', 'designer');
    });

    it('Asserts that the terms of service is selectable', () => {
        cy.get('[data-cy="terms"]')
            .click()
            .trigger('change');

        cy.get('[data-cy="termsInput"]')
            .should('be.checked');
    });

    it('Asserts that the form should submit', () => {
        cy.get('[data-cy="submit"]')
            .click();
    });

    it('Asserts that empty form fields are properly validated', () => {
        cy.get('[data-cy="name"]')
            .clear();

        cy.get('[data-cy="email"]')
            .clear();

        cy.get('[data-cy="password"]')
            .clear();

        cy.get('[data-cy="role"]')
            .select(''); 

        cy.get('[data-cy="terms"]')
            .click();

        cy.get('[data-cy="error"]')
            .should('be.visible');
    });
});