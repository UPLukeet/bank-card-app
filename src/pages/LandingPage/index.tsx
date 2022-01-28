import { useNavigate } from "react-router-dom"
import { BankCard } from "../../components/BankCard"
import { Routes } from "../../Routes"
import { testCardData } from "./testCardData"

export const LandingPage = () => {
  const navigate = useNavigate()

  const goToAddCard = () => {
    navigate(Routes.ADD_CARD)
  }

  return (
    <div className="flex flex-col px-unit-4 py-unit-6 h-full">
      <h1 className="heading text-purple-60">Your cards</h1>
      <p className="text-body">Add, edit or delete your card anytime.</p>
      <div className="my-unit-5">
        {testCardData?.map(({ name, type, cvc, cardNumber, expiry }) => (
          <BankCard
            key={cardNumber}
            name={name}
            type={type}
            cvc={cvc}
            cardNumber={cardNumber}
            expiry={expiry}
          />
        ))}
      </div>
      <button onClick={goToAddCard} className="btn mt-auto mb-unit-2">
        Add your card
      </button>
    </div>
  )
}
