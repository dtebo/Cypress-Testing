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
    beforeEach(() => {
        cy.visit('/');
    });
    -
    it('Asserts that the name field is present and contains the correct value', () => {
        cy.get('[data-cy="name"]')
            .type('Darren Tebo')
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
            .should('be.visible');
        
        cy.get('[data-cy="favoriteColor"]')
            .click();
    });
});