
describe('Exercicios Modulo 3', () => {
    
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });

    it('deve acessar a pagina de menssagem, redirecionar para o login e fazer o login', () => {
        cy.get('.header__message').click();
        cy.login('ana@email.com','Senha123');
    });

    it('na tela de home, verifique se as imagens dos pets aparecem',() => {
        cy.get('.button').click();
        cy.get('.cards').should('be.visible');
    })
});