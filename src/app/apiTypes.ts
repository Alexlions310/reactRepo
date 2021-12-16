declare global {
  interface Window {
    REST_API: string
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace apiTypes {
  export type DateTime = string

  export interface UserData {
    id: number
    name: string
    roles: UserRole[]
  }

  export type UserRole = {
    id: number
    name: string
  }

  export interface Pagination {
    number: number
    size: number
    totalElements: number | null
    totalPages: number | null
  }

  export interface UserCardHistory {
    userCardHistory: null | UserCard[]
    status: null | string
  }

  export interface UserCard {
    id: string
    name: string
  }
  export interface ConsultationsData {
    count: number
    next: string | null
    previous: string | null
    results: []
  }
}
