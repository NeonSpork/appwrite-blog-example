export interface IBlogPost {
  sum: number
  documents: Array<{
    collection: string
    id: string
    permissions: {
      read: Array<string>
      write: Array<string>
    }
    author: string
    title: string
    body: string
  }>
}
