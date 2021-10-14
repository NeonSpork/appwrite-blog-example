export interface IBlogPost {
  sum: number
  documents: Array<{
    collection: string
    id: string
    permissions: {
      read: Array<string>
      write: Array<string>
    }
    name: string
    title_text: string
    body_text: string
  }>
}
