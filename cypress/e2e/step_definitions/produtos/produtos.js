import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given("Que estou na pagina inicial da loja", () => {
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.viewport(1920, 1080)
});

When("Realizo a busca do produto HP ELITEPAD 1000 G2 TABLET", () => {
    cy.get('[id="searchSection"]').click();
    cy.get('input#autoComplete').should('be.visible').type('HP ELITEPAD 1000 G2 TABLET{enter}');
    cy.get('li[ng-repeat*="product in "]').contains('HP ElitePad 1000 G2 Tablet').should('be.visible').click();
});

And("Adiciono o produto HP ELITEPAD 1000 G2 TABLET ao carrinho", () => {
    cy.get('button[name="save_to_cart"]').click();
    cy.get('button#checkOutPopUp').click();
});

Then("Acesso a tela de pagamento", () => {
    cy.get('h5[translate="ORDER_SUMMARY"]').should('have.text', 'ORDER SUMMARY');
});

And("Valido que o produto HP ELITEPAD 1000 G2 TABLET está presente no carrinho", () => {
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding')
        .contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible');
    
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > :nth-child(2)')
        .contains('1').should('be.visible');
    
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > :nth-child(3) > .ng-binding')
        .contains('BLUE').should('be.visible');
    
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(3) > .price')
        .contains('$1,009.00').should('be.visible');
    
    cy.get(':nth-child(5) > .roboto-bold')
        .contains('TOTAL').should('be.visible');
    
    cy.get('.roboto-bold > .roboto-medium')
        .contains('$1,009.00').should('be.visible');
});
