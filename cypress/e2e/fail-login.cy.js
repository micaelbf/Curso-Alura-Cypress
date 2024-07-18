// Scenario: Login fail site Adopet
//GIVE: A user acesses logins page.
//WHEN: A user insert a e-mail and password non-standard.
//AND: A user click on login. 
//THEN: The system valid credencials 
//AND: System display error menssage "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
//Business Rules 
// The e-mail's need to be a valid format. 
// The password must be capital letter, a number and have between 6 and 15 characters.

describe('Login Fail', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Needes to type wrong "email","password" and click on "login", after that recive a error menssage', () => {
      
    cy.get('[data-test="input-loginEmail"]').type ('@ana.com');
    cy.get('[data-test="input-loginPassword"]').type ('abcde');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
        
  })
})