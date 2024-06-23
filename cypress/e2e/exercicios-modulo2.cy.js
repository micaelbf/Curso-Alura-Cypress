
describe('Teste Página Principal Adopet', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });

    it('deve verificar se o texto "AdoPet" está presente', () => {
       cy.title().should('eq','AdoPet');    
    });

    it('deve verificar se o texto "Quem ama adota!" está presente', () => {
        cy.contains('p','Quem ama adota!').should('be.visible');
    });

    it('deve verificar menssagem de testo', () => {
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });

    it('deve verificar o fluxo de login', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha12');
        cy.get('[data-test="submit-button"]').click();
    });
});

