import { BankCard } from "../../components/BankCard"
import { testCardData } from "./testCardData"

export const LandingPage = () => {
  return (
    <div className="flex flex-col px-unit-4 py-unit-6 h-full">
      <h1 className="heading">Your cards</h1>
      <p className="text-body">Add, edit or delete your card anytime.</p>
      <div className="my-unit-5">
        {testCardData?.map(({ name, type, cvc, cardNumber, expiry }) => (
          <BankCard
            name={name}
            type={type}
            cvc={cvc}
            cardNumber={cardNumber}
            expiry={expiry}
          />
        ))}
      </div>
      <button className="btn mt-auto mb-unit-2">Add your card</button>
    </div>
  )
}
