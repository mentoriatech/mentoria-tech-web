export const dashboardLogin = () => {
  const username = Cypress.env('GITHUB_USER')
  const password = Cypress.env('GITHUB_PW')
  const loginUrl = Cypress.env('SITE_NAME')
  const cookieName = Cypress.env('COOKIE_NAME')

  const socialLoginOptions = {
    username,
    password,
    loginUrl,
    headless: true,
    logs: true,
    isPopup: false,
    loginSelector: `[data-testid="GitHub"]`,
  }

  cy.get('[data-testid="GitHub"]')
  return cy
    .task('GitHubSocialLogin', socialLoginOptions)
    .then(({ cookies }) => {
      cy.clearCookies()
      const cookie = cookies
        .filter((cookie) => cookie.name === cookieName)
        .pop()
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure,
        })

        Cypress.Cookies.defaults({
          preserve: cookieName,
        })
      }
    })
}
