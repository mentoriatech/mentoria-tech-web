import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GH_APPLICATION_CLIENT_ID,
      clientSecret: process.env.GH_APPLICATION_CLIENT_SECRET,
      scope: 'user,repo',
    }),
  ],
  pages: {
    error: '/auth/error', // Error code passed in query string as ?error=
    newUser: '/dashboard/onboarding',
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
