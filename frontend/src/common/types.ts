export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface Location {
  x: number
  y: number
}

export interface Officer {
  id: number
  badgeName: string
  loc: Location
}

export interface Incident {
  id: number
  codeName: string
  loc: Location
  officerId?: number
}

export interface TApiError {
  code: number
  message: string
}

export interface TApiData {
  incidents?: Incident[]
  officers?: Officer[]
}

export interface TApiResponse {
  data?: TApiData
  error?: TApiError
}
