import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputField } from "../../components/InputField"
import { PopupModal } from "../../components/PopupModal"
import { useCardContext } from "../../context/CardContext"
import { Routes } from "../../Routes"
import { CardDetails } from "../../types/cardDetails"
import { expiryMatch, lettersMatch, numberMatch } from "../../utils/index"

export const AddCardPage = () => {
  const [name, setName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
  const [isNameError, setIsNameError] = useState(false)
  const [isCardError, setIsCardError] = useState(false)
  const [isExpiryError, setIsExpiryError] = useState(false)
  const [isCvcError, setIsCvcError] = useState(false)
  const { addCard } = useCardContext()

  const isError = isNameError || isCardError || isExpiryError || isCvcError

  const navigate = useNavigate()

  const closePopup = () => {
    navigate(Routes.LANDING_PAGE)
  }

  const card: CardDetails = {
    name,
    cardNumber,
    expiry,
    cvc,
    type: "masterCard",
  }

  const uploadCard = () => {
    addCard(card)
    navigate(Routes.LANDING_PAGE)
  }

  return (
    <PopupModal heading="Add your card details" onCloseClick={closePopup}>
      <div className="flex flex-col h-full">
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
          label="CVC (security code)"
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
          onClick={uploadCard}
          disabled={isError}
          className="btn mt-auto mb-unit-5"
        >
          Confirm
        </button>
      </div>
    </PopupModal>
  )
}
