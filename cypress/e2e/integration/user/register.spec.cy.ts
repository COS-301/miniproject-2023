import * as data from '../../../data/index';
describe('Register Page', () => {
  it('visit register page', () => {
    cy.visit('/register');
    cy.url().should('eq', `${Cypress.config().baseUrl}/register`);
  });

  it('asserting register page', () => {
    cy.visit('/register');
    cy.get('ion-img')
      .should('have.attr', 'src')
      .and('include', '/assets/Design_icons/Login-page-background-and-images/Memory-lane-logo.png');

    cy.get('input[type=text]').should('have.attr', 'placeholder').and('include', 'Enter username');

    cy.get('input[type=email]').should('have.attr', 'placeholder').and('include', 'Enter email');

    cy.get('input[type=password]').should('have.attr', 'placeholder').and('include', 'Enter password');

    cy.get('ion-button[type=submit]').contains('Register');

    cy.contains('Already have an account? ');
    cy.get('ion-nav-link[routerlink="/login"]').should('exist');

    cy.contains('©2023 Mini-Project (Pty) Ltd.');
  });

  it('required username', () => {
    cy.visit('/register');
    cy.get('ion-button[type=submit]').should('have.attr', 'disabled'); //there is no error message displayed, use button state to confirm
  });

  it('required email', () => {
    cy.visit('/register');    
    cy.get('input[type=email]').click();
    cy.get('input[type=password]').click();
    cy.get('ion-button[type=submit]').should('have.attr', 'disabled');
    cy.get('.error-text').contains('Email is required');
  });

  it('required password', () => {
    cy.visit('/register');
    cy.get('input[type=password]').click();
    cy.get('body').click();
    cy.get('ion-button[type=submit]').should('have.attr', 'disabled');
    cy.get('.error-text').contains('Password is required');
  });
});
