import { ReactChild } from "react"
import closeIcon from "../assets/icons/close-icon.svg"

interface PopupModalProps {
  onCloseClick: () => void
  children: ReactChild
}
export const PopupModal = ({ onCloseClick, children }: PopupModalProps) => {
  return (
    <>
      <div
        onClick={onCloseClick}
        className="absolute top-0 h-full w-full z-100 bg-grey-90 opacity-80 cursor-pointer"
      />
      <div className="absolute bottom-0 h-5/6 w-full bg-white rounded-t-md">
        <div className="flex m-unit-4">
          <img
            onClick={onCloseClick}
            className="ml-auto cursor-pointer"
            src={closeIcon}
          />
        </div>
        {children}
      </div>
    </>
  )
}
