import { CardDetails } from "../types/cardDetails"
import visaLogo from "../assets/icons/visa-logo.svg"
import mastercardLogo from "../assets/icons/mastercard-logo.svg"
import editIcon from "../assets/icons/edit-icon.svg"

export const BankCard = ({
  type,
  cvc,
  expiry,
  name,
  cardNumber,
}: CardDetails) => {
  return (
    <div
      className={`w-full rounded-sm p-unit-2 ${
        type === "visa" ? "bg-visa-green" : "bg-mastercard-purple"
      }`}
    >
      <div className="flex">
        <img src={type === "visa" ? visaLogo : mastercardLogo} />
        <div className="flex ml-auto">
          <div className="flex flex-col m-unit-1">
            <p>CVC</p>
            <p>{cvc}</p>
          </div>
          <div className="flex flex-col m-unit-1">
            <p>Expires</p>
            <p>{expiry}</p>
          </div>
        </div>
      </div>
      <div>
        <p>{name}</p>
        <div className="flex w-full">
          <p>{cardNumber}</p>
          <img className="ml-auto" src={editIcon} />
        </div>
      </div>
    </div>
  )
}
