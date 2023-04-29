import * as data from '../../../data/index';
describe('Register Page', () => {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
  })
  
  beforeEach(()=>{
    cy.visit('/register');
    cy.viewport('iphone-x');
  })
  
  it('visit register page', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/register`);
  });

  it('asserting register page', () => {
    cy.get('ion-img')
      .should('have.attr', 'src')
      .and('include', '/assets/Design_icons/Login-page-background-and-images/Memory-lane-logo.png');
    cy.get('input[type=email]').should('have.attr', 'placeholder').and('include', 'Enter email');

    cy.get('input[type=password]').should('have.attr', 'placeholder').and('include', 'Enter password');

    cy.get('ion-button[type=submit]').contains('Register');

    cy.contains('Already have an account? ');
    cy.get('ion-nav-link[routerlink="/login"]').should('exist');

    cy.contains('©2023 Mini-Project (Pty) Ltd.');
  });

  it('required email', () => {
    cy.get('input[type=email]').click();
    cy.get('input[type=password]').click();
    cy.get('ion-button[type=submit]').should('have.attr', 'disabled');
    cy.get('.error-text').contains('Email is required');
  });

  it('required password', () => {
    cy.get('input[type=password]').click();
    cy.get('body').click();
    cy.get('ion-button[type=submit]').should('have.attr', 'disabled');
    cy.get('.error-text').contains('Password is required');
  });
});
