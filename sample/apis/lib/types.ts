import * as es from '@elastic/elasticsearch'
export type SearchRequest = es.estypes.SearchRequest
export type SearchResponse = es.estypes.SearchResponse
export type DiagnosticResult = es.DiagnosticResult

export interface RunParameters {
  clientOpts: es.ClientOptions
  params: any
  ac: AbortController
}

export interface RunResult {
  data: unknown[],     // hits.hits
  res: DiagnosticResult
}