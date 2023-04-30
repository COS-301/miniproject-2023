describe('Memories', () => {
    it('visits home/feed',()=>{
        cy.visit('home/feed');
        cy.get('ion-title')
        .contains('Memory Lane');
        cy.get('svg').should('have.length', 5);//there are 5 custom icons
        cy.get('.account-time').should('exist');
    })
    
    it('assert create memory page',()=>{
        cy.visit('home/feed');
        cy.click(18,29);//using x and y coordinates of element, no clear unique selector
        cy.contains('Add Memory');
        cy.contains('Description');
        cy.contains('Title');
        cy.get('ion-textarea[maxlength=80]').should('have.attr', 'placeholder').and('include', 'Type a description');
        cy.get('ion-input[maxlength=23]').should('have.attr', 'placeholder').and('include', 'Enter a title');
        cy.get('input[type=file]').should('exist');
        cy.get('#ion-overlay-1 > app-add-memory > ion-content > ion-list > ion-card').should('exist');
        cy.get('ion-button[ng-reflect-ng-class=button-cancel]').should('exist');
        cy.get('ion-button[ng-reflect-ng-class=button-add]').should('exist');
    })
    
    it('add memory',()=>{        
        cy.visit('home/feed');
        cy.click(18,29);
        cy.get('#ion-overlay-1 > app-add-memory > ion-content > ion-list > ion-item:nth-child(1) > ion-input > input').type('A Title');
        cy.get('#ion-overlay-1 > app-add-memory > ion-content > ion-list > ion-item.modal-list-item.description.ion-color.ion-color-dark.item.md.item-lines-default.item-fill-none.in-list.hydrated.item-label.item-interactive.item-textarea.item-input.item-has-placeholder.item-has-value.ion-valid.ion-dirty.ion-touched > ion-textarea')
        .type('A description');
        cy.get('input[type=file]').selectFile('../../../data/pic.jpg');
        cy.get('#ion-overlay-1 > app-add-memory > ion-content > ion-list > ion-card > ion-card-content > ion-text.memory-show-more.md.hydrated')
        .click();
        cy.get('img').should('exist');
        cy.get('ion-button[ng-reflect-ng-class=button-add]').click();
        cy.get('#ion-overlay-6').should('not.exist');
    })
    
    it('cancel creating memory',()=>{     
        cy.visit('home/feed');
        cy.click(18,29);
        cy.get('ion-button[ng-reflect-ng-class=button-cancel]').click();
        cy.get('#ion-overlay-6').should('not.exist');
    })
});