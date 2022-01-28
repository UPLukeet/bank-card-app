import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputField } from "../../components/InputField"
import { PopupModal } from "../../components/PopupModal"
import { Routes } from "../../Routes"

export const AddCardPage = () => {
  const [name, setName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")

  const navigate = useNavigate()

  const closePopup = () => {
    navigate(Routes.LANDING_PAGE)
  }

  return (
    <PopupModal heading="Add your card details" onCloseClick={closePopup}>
      <div className="flex flex-col h-full">
        <InputField
          label="Name on card"
          value={name}
          onChange={(value) => setName(value)}
        />
        <InputField
          label="Card number"
          value={cardNumber}
          onChange={(value) => setCardNumber(value)}
        />
        <InputField
          label="Expiry date"
          value={expiry}
          onChange={(value) => setExpiry(value)}
        />
        <InputField
          label="Cvc security code"
          value={cvc}
          onChange={(value) => setCvc(value)}
        />
        <button className="btn mt-auto mb-unit-5">Confirm</button>
      </div>
    </PopupModal>
  )
}
