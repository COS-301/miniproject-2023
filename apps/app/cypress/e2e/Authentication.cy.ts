

// describe('app', () => {

//   it('should register a new User', () => {
//     cy.visit('/welcome');
//     cy.get('ion-nav-link').contains('Register').click({force:true});

//     //should be in the login page
//     cy.url().should('include', '/register');
//     cy.get('input[type="email"]').type("cypress123@gmail.com");
//     cy.get('input[type="password"]').type("cypress123");
    
//     // eslint-disable-next-line cypress/no-unnecessary-waiting
//     cy.wait(1000);
    
//     cy.get('ion-text').contains('Register').click({force:true});

//     cy.url().should('include', '/dashboard');
//     cy.contains('Dashboard');
//   });

// });





describe('app', () => {

    it('should Log you into the App', () => {
      cy.visit('/welcome');
      cy.get('ion-nav-link').contains('Login').click({force:true});

      //should be in the login page
      cy.url().should('include', '/login');
      cy.get('input[type="email"]').type("cypress123@gmail.com");
      cy.get('input[type="password"]').type("cypress123");
      
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000);
      
      cy.get('ion-text').contains('Sign In').click({force:true});

      cy.url().should('include', '/dashboard');
      cy.contains('Dashboard');
    });
  
  });