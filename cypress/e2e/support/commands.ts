Cypress.Commands.add('login',(email,password) =>{
    describe('Login Command', ()=>{ 
      it('visit login page',()=>{
        cy.visit('/login');
        cy.url().should('eq', '/login');
      })
    
      it('asserting login page', () =>{
        cy.get('img')
        .should('have.attr', 'src')
        .and('include','/assets/Design_icons/Login-page-background-and-images/Memory-lane-logo.png');
        
        cy.get('input[type=email]')
        .should('have.attr', 'placeholder')
        .and('include','Enter email');
        
        cy.get('input[type=password]')
        .should('have.attr', 'placeholder')
        .and('include','Enter password');
        
        cy.get('ion-button[type=submit]')
        .contains('Login');
        
        cy.contains('Having trouble?');      
        cy.get('ion-nav-link[routerlink=/forgot]').should('exist');      
        
        cy.contains(`Don't have an account?`);    
        cy.get('ion-nav-link[routerlink=/register]').should('exist');
        
        cy.contains('©2023 Mini-Project (Pty) Ltd.');
  
      })
      
      it('required email', ()=>{
        cy.get('ion-button[type=submit]').click();
        cy.get('error-text')
        .should('contains','Email is required');
      })
      
      it('required password', ()=>{
        cy.get('ion-button[type=submit]').click();
        cy.get('error-text')
        .should('contains','Email is required');
      })
      
      it(`sign in user with email: ${email}`, ()=>{
        cy.get('input[type=email]').type(email);      
        cy.get('input[type=password]').type(password);
        cy.get('ion-button[type=submit]').click();
        
        cy.url().should('eq', '/home/feed');
        cy.contains('Memory Lane');
      })
    })
  })
  
  Cypress.Commands.add('register',(username,email,password) =>{
    describe('Register Command', ()=>{ 
      test('visit register page',()=>{
        cy.visit('/register');
        cy.url().should('eq', '/register');
      })
    
      test('asserting register page', () =>{
        cy.get('img[src=/assets/Design_icons/Login-page-background-and-images/Memory-lane-logo.png]')
        .should('exist');
        
        cy.get('img[src=/assets/Design_icons/Login-page-background-and-images/Big-person.png')
        .should('exist');
        
        cy.get('input[type=text]')
        .should('have.attr', 'placeholder')
        .and('include','Enter username');
        
        cy.get('input[type=email]')
        .should('have.attr', 'placeholder')
        .and('include','Enter email');
        
        cy.get('input[type=password]')
        .should('have.attr', 'placeholder')
        .and('include','Enter password');
        
        cy.get('ion-button[type=submit]')
        .contains('REGISTER');
        
        cy.contains('Already have an account? ')      
        cy.get('ion-nav-link[routerlink=/login]')
        .should('exist');      
        
        cy.contains('©2023 Mini-Project (Pty) Ltd.')
      })
      
      test('required username', ()=>{
        cy.get('ion-button[type=submit]')
        .should('have.attr', 'disabled');//there is no error message displayed, use button state to confirm
      })
      
      test('required email', ()=>{
        cy.get('ion-button[type=submit]').click();
        cy.get('error-text')
        .should('contains','Email is required');
      })
      
      test('required password', ()=>{
        cy.get('input[type=email]').type(`${email}{enter}`);
        cy.get('error-text')
        .should('contains','Password is required');
      })
      
      test(`register user with username: ${username}`, ()=>{
        cy.get('input[type=text]').type(username); 
        cy.get('input[type=email]').type(email);      
        cy.get('input[type=password]').type(password);
        cy.get('ion-button[type=submit]').click();
        
        cy.url().should('eq', '/home/feed');
        cy.contains('Memory Lane');
      })
    })
  })