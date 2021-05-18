import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'user,repo',
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = () => {
          const user = credentials.username === process.env.CREDENTIALS_USERNAME
          const password =
            credentials.username === process.env.CREDENTIALS_PASSWORD

          return (
            user &&
            password && { id: 1, name: 'Jane Doe', email: 'jane@doe.com' }
          )
        }
        if (user) {
          console.log(
            '🚀 ~ file: [...nextauth].js ~ line 38 ~ authorize ~ user',
            user,
          )
          // Any user object returned here will be saved in the JSON Web Token
          return user
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    error: '/auth/error', // Error code passed in query string as ?error=
    newUser: '/dashboard',
  },
  // A database is optional, but required to persist accounts in a database
  database: {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'mentoria',
  },
})
