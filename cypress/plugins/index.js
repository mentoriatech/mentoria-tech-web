/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import socialLogins from 'cypress-social-logins'

export default function (on) {
  on('task', {
    GitHubSocialLogin: socialLogins.plugins.GitHubSocialLogin,
  })
}
