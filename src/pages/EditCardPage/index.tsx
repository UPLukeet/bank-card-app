import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BankCard } from "../../components/BankCard"
import { InputField } from "../../components/InputField"
import { PopupModal } from "../../components/PopupModal"
import { Routes } from "../../Routes"
import { testCardData } from "../LandingPage/testCardData"

export const EditCardPage = () => {
  const [name, setName] = useState<string>()
  const [cardNumber, setCardNumber] = useState<string>()
  const [expiry, setExpiry] = useState<string>()
  const [cvc, setCvc] = useState<string>()

  const navigate = useNavigate()

  const closePopup = () => {
    navigate(Routes.LANDING_PAGE)
  }

  const dummyData = testCardData[0]

  return (
    <PopupModal heading="Add your card details" onCloseClick={closePopup}>
      <>
        <BankCard
          name={dummyData.name}
          type={dummyData.type}
          cvc={dummyData.cvc}
          cardNumber={dummyData.cardNumber}
          expiry={dummyData.expiry}
        />
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
      </>
    </PopupModal>
  )
}
