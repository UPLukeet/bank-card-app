export interface CardDetails {
  type: "visa" | "masterCard"
  cvc: string
  expiry: string
  name: string
  cardNumber: string
}
