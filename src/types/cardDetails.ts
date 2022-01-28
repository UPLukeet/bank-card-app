export interface CardDetails {
  type: "visa" | "masterCard"
  cvc: number
  expiry: string
  name: string
  cardNumber: number
}
