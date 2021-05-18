Cypress.Commands.add('login', () => {
  // set mock XSRF token with 30 minute session duration used by the session timer check
  cy.setCookie(
    'next-auth.csrf-token',
    '020cb3c0d6800f1d66a9fb09ccbf967d1199861bd4efcff0430133df77e7ef5a%7C5eaecca13b2bec19f248285db674692cee8097fa1a731b541d9674b24283794b',
  )
  cy.setCookie(
    'next-auth.session-token',
    '7e7bbcf233fd057889482da118341360966963cb43fd51f14d6e611629bc2a6a',
  )
  localStorage.setItem(
    'nextauth.message',
    '{"event":"session","data":{"trigger":"getSession"},"clientId":"50vqkung95koliamnm","timestamp":1620830744}',
  )
})
