//Cenário 1: Login e Senha Vazios
//Dado: O usuário acessar o link: https://adopet-frontend-cypress.vercel.app/
//Quando: O usuário clicar em "Fazer Login".
//E: Clicar em "Entrar".
//Então: Ele deve receber as menssagens de erro, solicitando a verificação do e-mail e senha.    

describe('Login e Senha Vazios', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();
      cy.intercept(
        'POST', 
        'https://adopet-api-i8qu.onrender.com/adotante/login',
        {statusCode: 400}).as('stubPost');
    })
  
    it('Deve apresentar as mensagens de erro ao deixar os dados de login em branco', () => {
       cy.get('[data-test="submit-button"]').click();
       cy.contains('É necessário informar um endereço de email').should('be.visible'); 
       cy.contains('Insira sua senha').should('be.visible'); 
               
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente',() => {
        cy.login('ana@email.com', 'Senha123');
        cy.wait('@stubPost');
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');

    })
  })