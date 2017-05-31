interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'R3Y2jUGKL8yfOyv7m6VOn59jIYCMFMzH',
  CLIENT_DOMAIN: "maviola.auth0.com",
  AUDIENCE: "daily-deals-api",
  REDIRECT: "http://localhost:4200/callback",
  SCOPE: 'openid'
}