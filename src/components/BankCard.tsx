import { CardDetails } from "../types/cardDetails"
import visaLogo from "../assets/icons/visa-logo.svg"
import mastercardLogo from "../assets/icons/mastercard-logo.svg"
import editIcon from "../assets/icons/edit-icon.svg"

type BankCardProps = CardDetails & {
  onEditClick?: () => void
}

export const BankCard = ({
  type,
  cvc,
  expiry,
  name,
  cardNumber,
  onEditClick,
}: BankCardProps) => {
  return (
    <div
      className={`w-full rounded-sm p-unit-4 pt-unit-3 my-unit-2 ${
        type === "visa" ? "bg-visa-green" : "bg-mastercard-purple"
      }`}
    >
      <div className={`flex ${type === "masterCard" && "text-white"}`}>
        <img src={type === "visa" ? visaLogo : mastercardLogo} />
        <div className="flex ml-auto">
          <div className="flex flex-col m-unit-1">
            <p className="text-xs ml-auto font-medium">CVC</p>
            <p className="text-white font-bold text-sm">{cvc}</p>
          </div>
          <div className="flex flex-col m-unit-1">
            <p className="text-xs ml-auto font-medium">Expires</p>
            <p className="text-white font-bold text-sm">{expiry}</p>
          </div>
        </div>
      </div>
      <div className="mt-unit-8">
        <p className="text-white text-sm font-bold">{name}</p>
        <div className="flex w-full mt-unit-1">
          <p
            className={`text-sm font-semibold word-spacing-lg ${
              type === "masterCard" && "text-white"
            }`}
          >
            {cardNumber.replace(/(.{4})/g, "$1 ").trim()}
          </p>
          {onEditClick && (
            <img
              onClick={() => onEditClick()}
              className="ml-auto cursor-pointer"
              src={editIcon}
            />
          )}
        </div>
      </div>
    </div>
  )
}
