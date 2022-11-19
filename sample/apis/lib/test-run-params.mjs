  /** @typedef { import('./types').RunParameters } RunParameters */

  /** @type { RunParameters } */
  export const runParams = {
    clientOpts: {
      node: 'https://localhost:9200',
      auth: {
        username: 'elastic',
        password: 'changeme'
      },
      tls: {
        rejectUnauthorized: false,
      }
    },
    params: null,
    ac: new AbortController(),
  }
