describe('Post Page Tests', () => {
  beforeEach(() => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/login');
    cy.wait(2000);

    cy.location('pathname').then((current) => {
      if(!current.includes('home/feed')) {
        cy.get('ion-input[formControlName="email"]')
        .find('input')
        .type('test@test.com');

        cy.get('ion-input[formControlName="password"]')
        .find('input')
        .type('Testing123?');
        cy.wait(250);

        cy.get('ion-button').contains("It's about time!").click();
        cy.location('pathname').then((curr) => {
          if(!curr.includes('home/feed')) {
            cy.get('ion-button').contains("It's about time!").click();
          }
        });
      }
    });

    cy.visit('http://localhost:4200/home/create-post');
  });

  it('Displays Content', () => {
    cy.get('ion-content').should('be.visible');
  });

  it('Contains Create Post Form', () => {
    cy.get('form').should('be.visible');
    cy.get('ion-button').contains('Submit').should('be.visible');
  });

  describe('Form Input Field Tests', () => {
    it('Contains Title Input field', () => {
      cy.get('ion-item').contains('Title')
      .parent().find('ion-input[type="text"]')
      .should('exist');
    });

    it('Contains Caption Input field', () => {
      cy.get('ion-item').contains('Caption')
      .parent().find('ion-input[type="text"]')
      .should('exist');
    });

    it('Contains Link Input field', () => {
      cy.get('ion-item').contains('Link')
      .parent().find('ion-input[type="text"]')
      .should('exist');
    });

    it('Contains Tag Input field', () => {
      cy.get('ion-item').contains('Tag')
      .parent().find('ion-select')
      .should('exist');
    });

    it('Contains Photo Input field', () => {
      cy.get('ion-item').contains('Photo')
      .parent().find('input[type="file"]')
      .should('exist');
    });
  });

})
