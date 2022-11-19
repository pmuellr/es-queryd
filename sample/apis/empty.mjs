#!/usr/bin/env node

/** @typedef { import('./lib/types').RunParameters } RunParameters */
/** @typedef { import('./lib/types').RunResult } RunResult */
/** @typedef { import('./lib/types').SearchRequest } EsSearchRequest */

// const { Client } = require('@elastic/elasticsearch')
import { Client } from '@elastic/elasticsearch'

/** @type { (params: RunParameters) => Promise<RunResult> } */
export async function run(runParams) {
  const {clientOpts, ac} = runParams
 
  const client = new Client(clientOpts)
  /** @type { EsSearchRequest } */
  const query = { size: 2 }
  const res = await client.search(query, { meta: true, signal: ac.signal })
  
  const data = res.body.hits.hits
  res.body.hits.hits = []
  
  return { data, res }
}

if (import.meta.url.replace(/^file:\/\//, '') === process.argv[1]) test()

async function test() {
  const runParams = (await import('./lib/test-run-params.mjs')).runParams
  const { data, res } = await run(runParams)

  console.log(JSON.stringify(data, null, 4))
  console.log(JSON.stringify(res, null, 4))
}
