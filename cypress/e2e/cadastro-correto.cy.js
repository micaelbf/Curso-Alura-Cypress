describe('Verificação página de cadastro', () => {

  it('Deve preencher os campos corretamente para cadastro de um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.get('input[name=nome]').type('Ana de Jesus');
    cy.get('input[name=email]').type('ana@email.com');
    cy.get('input[name=password]').type('Senha123');
    cy.get('input[name=confirm_password]').type('Senha123');
    cy.contains('button','Cadastrar').click();
  })
})
