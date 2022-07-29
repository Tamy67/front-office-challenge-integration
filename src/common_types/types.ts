export type NextEventType = {
  id: string
  sportId: string
  sportTitle: string
  pictureUrl: string
  date: string
}
export type MedalType = {
  key: string
  country: string
  medals: {
    gold: number
    silver: number
    bronze: number
  }
}
export type TotalType = {
  total: number
}
