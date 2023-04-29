import * as data from '../../../data';

describe('Register User and Login', () => {
  before(() => {
    cy.then(Cypress.session.clearCurrentSessionData)
  })
  
  it(`Register data.user with email=${data.user.email}`, () => {
    cy.register(data.user.email, data.user.password);
    
    cy.url().should('eq', `${Cypress.config().baseUrl}/home/feed`);
    cy.get('ion-title')
    .contains('Memory Lane');
  });

  it(`Login User with email=${data.user.email}`, () => {
    cy.login(data.user.email, data.user.password);  
    
    cy.url().should('eq', `${Cypress.config().baseUrl}/home/feed`);
    cy.get('ion-title')
    .contains('Memory Lane');
  });
});
