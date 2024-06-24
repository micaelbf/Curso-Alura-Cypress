
describe('Exercicios Modulo 1', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');

  })
 
  it('deve clicar em "Ver pets disponíveis para adoção"', () => {    
    cy.get('.button').click();
  })

  it('deve clicar nos headers', () => {
    
    cy.get('.header__home').click();
    cy.get('.header__message').click();
  })

  it('Visitar página de login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })

  it('Visitar página Home', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })

  it('Visitar página home e clicar no botão “Falar com o responsável”', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.contains('a','Falar com responsável').click();  
  })

})