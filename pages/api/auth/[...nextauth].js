import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  pages: {
    error: '/auth/error', // Error code passed in query string as ?error=
    newUser: '/new' // If set, new users will be directed here on first sign in
  },
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})
