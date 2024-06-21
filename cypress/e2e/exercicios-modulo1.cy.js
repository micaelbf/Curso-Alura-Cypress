describe('Treinando comandos cy.visit / cy.get / cy.contains', () => {
  
  it('Visitar página principal e clicar em "Ver pets disponíveis para adoção"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();
  })

  it('Visitar pagina adopet e clicar nos headers', () => {
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