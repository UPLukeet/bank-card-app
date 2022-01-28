import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BankCard } from "../../components/BankCard"
import { InputField } from "../../components/InputField"
import { PopupModal } from "../../components/PopupModal"
import { Routes } from "../../Routes"
import { testCardData } from "../LandingPage/testCardData"

export const EditCardPage = () => {
  const [name, setName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")

  const { cardIndex } = useParams()

  const navigate = useNavigate()

  const closePopup = () => {
    navigate(Routes.LANDING_PAGE)
  }

  const dummyData = cardIndex && testCardData[parseInt(cardIndex)]

  useEffect(() => {
    if (dummyData) {
      setName(dummyData.name)
      setCardNumber(dummyData.cardNumber)
      setExpiry(dummyData.expiry)
      setCvc(dummyData.cvc)
    }
  }, [dummyData])

  return (
    <PopupModal heading="Add your card details" onCloseClick={closePopup}>
      <div className="flex flex-col h-full">
        {dummyData && (
          <BankCard
            name={dummyData.name}
            type={dummyData.type}
            cvc={dummyData.cvc}
            cardNumber={dummyData.cardNumber}
            expiry={dummyData.expiry}
          />
        )}
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
