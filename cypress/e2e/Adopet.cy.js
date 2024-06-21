describe('Verificação inicial da página Adopet', () => {

  it('Deve carregar a página inicial e fazer um cadastro', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.get('input[name=nome]').type('Kimbely Ferreira');
    cy.get('input[name=email]').type('kim@email.com');
    cy.get('input[name=password]').type('Senha123');
    cy.get('input[name=confirm_password]').type('Senha123');
    cy.contains('button','Cadastrar').click();
  })

  it('Visitar página principal e clicar em "Ver pets disponíveis para adoção"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();
  })

  it('Visitar pagina Adopet e clicar nos headers', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
    cy.get('.header__message').click();
  })

  it('Visitar página de login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })

  it('Visitar página Home', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })

  it('Visitarpágina home e clicar no botão “Falar com o responsável”', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.contains('a','Falar com responsável').click();  
  })

})
