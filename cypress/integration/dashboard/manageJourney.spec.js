// import sessionFixture from '../../fixtures/session.json'
import { dashboardLogin } from '../../helpers/login'

context('Manage Journey: ', () => {
  before(() => {
    cy.log(`Visiting https://mentoria.tech`)
    cy.log(process.env.CYPRESS_ENV)
    cy.log(process.env.NODE_ENV)
  })

  describe('new users should', () => {
    it('be able to create a board', () => {
      cy.visit('/entrar')
      dashboardLogin()

      // cy.visit('/entrar')
    })
  })
})
