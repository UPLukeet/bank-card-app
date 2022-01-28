import { BankCard } from "../../components/BankCard"

export const LandingPage = () => {
  return (
    <div className="mx-unit-4 my-unit-6">
      <h1 className="heading">Your cards</h1>
      <p className="text-body">Add, edit or delete your card anytime.</p>
      <BankCard
        name="Bob Bobberson"
        type="visa"
        cvc={123}
        cardNumber={123456788910}
        expiry="21/30"
      />
      <button className="btn">Add your card</button>
    </div>
  )
}
