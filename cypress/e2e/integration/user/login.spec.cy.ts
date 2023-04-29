import * as data from '../../../data';

describe('Login Page', () => {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
  })
  
  beforeEach(()=>{
    cy.visit('/login');
    cy.viewport('iphone-x');
  })
  
  it('visit login page', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/login`);
  });

  it('asserting login page', () => {
    cy.get('ion-img')
      .should('have.attr', 'src')
      .and('include', '../../../../../assets/Design_icons/Login-page-background-and-images/Memory-lane-logo.png');

    cy.get('input[type=email]').should('have.attr', 'placeholder').and('include', 'Email');

    cy.get('input[type=password]').should('have.attr', 'placeholder').and('include', 'Password');

    cy.get('ion-button[type=submit]').contains('Login');

    cy.contains('Having trouble?');
    cy.get('ion-nav-link[routerlink="/forgot"]').should('exist');

    cy.contains(`Don't have an account?`);
    cy.get('ion-nav-link[routerlink="/register"]').should('exist');

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
