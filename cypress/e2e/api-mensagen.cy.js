describe('Testando API',() => {

    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcxOTQyMjk5OCwiZXhwIjoxNzE5NjgyMTk4fQ.wI8kvDdqVpZ82sY7JASQ1YHnZ8Z3AxL141O0xcuzaN4`

    it('deve verificar a resposta do GET',() => {
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: {authorization}
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).is.not.empty;
            expect(response.body).to.have.property('msg');            
        });
    });
});