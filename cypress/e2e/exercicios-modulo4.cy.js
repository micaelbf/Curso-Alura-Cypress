// Exercícios
// Faça uma request para a API do AdoPet com um usuário autenticado e verifique se, ao acessar a página de /perfil, há o nome do usuário em sua resposta.
// Na página de exemplos do cypress, verifique se a funcionalidade de delete funciona.
// Na página de exemplos do cypress. verifique se a funcionalidade de filtrar tarefas funciona.

describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNGNiYTI0OS0zMTc5LTRmYmMtYjg5YS1kNDk2YWNkYjhhMDMiLCJhZG9wdGVyTmFtZSI6Ik1pY2FlbCIsImlhdCI6MTcxOTQzMDM0NiwiZXhwIjoxNzE5Njg5NTQ2fQ.Dl-AKQ5CVXv7u2fPs1Y0ae9DGhYpPB83Mcu2pXY1opw`
      
    it('Deve mostrar o nome do perfil', () => {
        cy.request({
        method: 'GET',
        url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/b4cba249-3179-4fbc-b89a-d496acdb8a03',
        headers: { authorization }
                   
       }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Micael')
        })
    })
})