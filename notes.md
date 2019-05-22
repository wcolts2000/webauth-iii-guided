# JWTS

- Server

  - producing the token
  - send the token to the client
  - read, decoding and verifying the token
  - making the payload available to the rest of the api

- Client
  - store the token
  - send the token on every request (every protected request)
  - destroy the token on logout

## generate a gitingnore file easily through this command

- `npx gitignore node`
