import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BankCard } from "../../components/BankCard"
import { InputField } from "../../components/InputField"
import { PopupModal } from "../../components/PopupModal"
import { useCardContext } from "../../context/CardContext"
import { Routes } from "../../Routes"
import { CardDetails } from "../../types/cardDetails"
import { expiryMatch, lettersMatch, numberMatch } from "../../utils"

export const EditCardPage = () => {
  const [name, setName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
  const [isNameError, setIsNameError] = useState(false)
  const [isCardError, setIsCardError] = useState(false)
  const [isExpiryError, setIsExpiryError] = useState(false)
  const [isCvcError, setIsCvcError] = useState(false)
  const { savedCards, updateCard, deleteCard } = useCardContext()

  const isError = isNameError || isCardError || isExpiryError || isCvcError

  const { cardIndex } = useParams()

  const navigate = useNavigate()

  const closePopup = () => {
    navigate(Routes.LANDING_PAGE)
  }

  const selectedCard = cardIndex
    ? (savedCards[parseInt(cardIndex)] as CardDetails)
    : undefined

  useEffect(() => {
    if (selectedCard) {
      setName(selectedCard.name)
      setCardNumber(selectedCard.cardNumber)
      setExpiry(selectedCard.expiry)
      setCvc(selectedCard.cvc)
    }
  }, [selectedCard])

  const card: CardDetails = {
    name,
    cardNumber,
    expiry,
    cvc,
    type: selectedCard?.type as "masterCard" | "visa",
  }

  const editCard = () => {
    if (cardIndex) {
      updateCard(parseInt(cardIndex), card)
      navigate(Routes.LANDING_PAGE)
    }
  }

  const removeCard = () => {
    if (cardIndex) {
      deleteCard(parseInt(cardIndex))
      navigate(Routes.LANDING_PAGE)
    }
  }

  return (
    <PopupModal heading="Add your card details" onCloseClick={closePopup}>
      <div className="flex flex-col h-full">
        {selectedCard && (
          <BankCard
            name={selectedCard.name}
            type={selectedCard.type}
            cvc={selectedCard.cvc}
            cardNumber={selectedCard.cardNumber}
            expiry={selectedCard.expiry}
          />
        )}
        <InputField
          label="Name on card"
          value={name}
          onChange={(value) => setName(value)}
          isError={setIsNameError}
          type={
            name.length > 0
              ? name.match(lettersMatch)
                ? "success"
                : "error"
              : undefined
          }
        />
        <InputField
          label="Card number"
          value={cardNumber}
          onChange={(value) => setCardNumber(value)}
          isError={setIsCardError}
          type={
            cardNumber.length > 0
              ? cardNumber.length === 16 && cardNumber.match(numberMatch)
                ? "success"
                : "error"
              : undefined
          }
        />
        <InputField
          label="Expiry date"
          value={expiry}
          onChange={(value) => setExpiry(value)}
          isError={setIsExpiryError}
          type={
            expiry.length > 0
              ? expiry.match(expiryMatch)
                ? "success"
                : "error"
              : undefined
          }
        />
        <InputField
          label="Cvc security code"
          value={cvc}
          onChange={(value) => setCvc(value)}
          isError={setIsCvcError}
          type={
            cvc.length > 0
              ? cvc.length === 3 && cvc.match(numberMatch)
                ? "success"
                : "error"
              : undefined
          }
        />
        <button
          disabled={isError}
          onClick={editCard}
          className="btn mt-auto mb-unit-1"
        >
          Confirm
        </button>
        <button onClick={removeCard} className="text-grey-20 mt-auto mb-unit-4">
          Delete card
        </button>
      </div>
    </PopupModal>
  )
}
