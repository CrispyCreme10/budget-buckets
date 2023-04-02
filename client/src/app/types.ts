export interface LineItem {
  id: number,
  bucketId: number,
  name: string,
  amount: number
}

export interface Bucket {
  id: number,
  templateId: number,
  name: string,
  items: LineItem[]
}

export interface Template {
  id: number,
  name: string,
  buckets: Bucket[]
}