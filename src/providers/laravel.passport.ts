import { assignDefaults, addAuthorize } from './_utils'

export function laravelPassport (nuxt, strategy) {
  assignDefaults(strategy, {
    scheme: 'oauth2',
    name: 'laravel.passport',
    endpoints: {
      authorization: `${strategy.url}/oauth/authorize`,
      token: `${strategy.url}/oauth/token`
    },
    token: {
      property: 'access_token',
      type: 'Bearer',
      name: 'Authorization',
      maxAge: 60 * 60 * 24 * 365
    },
    refreshToken: {
      property: 'refresh_token',
      maxAge: 60 * 60 * 24 * 30
    },
    responseType: 'code',
    grantType: 'authorization_code',
    scope: '*'
  })

  addAuthorize(nuxt, strategy)
}