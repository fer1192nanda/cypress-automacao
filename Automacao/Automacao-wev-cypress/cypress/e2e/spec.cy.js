describe('Login de Acesso', () => {
  it('Acessar tela de Login', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.contains('Login')
  })
})