// Na página de exemplos do cypress, verifique se a funcionalidade de delete funciona.

describe('Todo List Test', () => {
    
    beforeEach(() => {
      // Visitar a página de exemplo
      cy.visit('https://example.cypress.io/todo');
        
    })

    it('Deve selecionar todos os iténs como feito e limpar a lista', () => {
           
      cy.get('.todo-list li').find('.toggle').check();;
      cy.get('.footer > .todo-button').click(); 
    });
});
  