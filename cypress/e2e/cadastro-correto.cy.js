describe('Verificação página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();

  })

  it('Deve preencher os campos corretamente para cadastro de um novo usuário', () => {
   
    cy.cadastro('Ana de Jesus','ana@email.com','Senha123','Senha123');
  
  })
})
