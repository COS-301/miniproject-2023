import * as data from '../../../data';

describe('Register User and Login', () => {

  it(`Register data.user with username=${data.user.username}`, () => {
    cy.register(data.user.username, data.user.email, data.user.password);
    cy.get('ion-button[type=submit]').click();
    
    cy.url().should('eq', `${Cypress.config().baseUrl}/home/feed`);
    // cy.get('ion-title')
    // .contains('Memory Lane');
  });

  it(`Login User with email=${data.user.email}`, () => {
    cy.login(data.user.email, data.user.password);  
    cy.get('ion-button[type=submit]').click();
    
    // cy.url().should('eq', `${Cypress.config().baseUrl}/home/feed`);
    // cy.get('ion-title')
    // .contains('Memory Lane');
  });
});
