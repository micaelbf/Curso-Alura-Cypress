describe('Verificação página de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
     
    })

    it('Deve fazer o input da frase "Alimentar o gato"', () => {
        cy.adiciona('Alimentar o gato'); 
    })
})