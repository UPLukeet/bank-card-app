import { Outlet, useNavigate } from "react-router-dom"
import { BankCard } from "../../components/BankCard"
import { useCardContext } from "../../context/CardContext"
import { Routes } from "../../Routes"

export const LandingPage = () => {
  const navigate = useNavigate()
  const { savedCards } = useCardContext()

  const goToAddCard = () => {
    navigate(`/${Routes.ADD_CARD}`)
  }

  const goToEditCard = (idx: number) => {
    navigate(`/${Routes.EDIT_CARD}/${idx}`)
  }

  return (
    <>
      <div className="flex flex-col px-unit-4 py-unit-6 h-full">
        <h1 className="heading text-purple-60">Your cards</h1>
        <p className="text-body">Add, edit or delete your card anytime.</p>
        <div className="my-unit-5">
          {savedCards.length > 0 ? (
            savedCards?.map(({ name, type, cvc, cardNumber, expiry }, idx) => (
              <BankCard
                key={cardNumber}
                name={name}
                type={type}
                cvc={cvc}
                cardNumber={cardNumber}
                expiry={expiry}
                onEditClick={() => goToEditCard(idx)}
              />
            ))
          ) : (
            <p className="text-grey-70 text-md text-center mt-unit-4 font-bold">
              No cards to show
            </p>
          )}
        </div>
        <div className="mt-auto">
          <button onClick={goToAddCard} className="btn mt-auto mb-unit-2">
            Add your card
          </button>
        </div>
      </div>
      <Outlet />
    </>
  )
}
