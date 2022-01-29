import { ReactChild } from "react"
import closeIcon from "../assets/icons/close-icon.svg"

interface PopupModalProps {
  onCloseClick: () => void
  children: ReactChild
  heading: string
}
export const PopupModal = ({
  onCloseClick,
  children,
  heading,
}: PopupModalProps) => {
  return (
    <>
      <div
        onClick={onCloseClick}
        className="fixed top-0 h-full w-full z-100 bg-grey-90 opacity-80 cursor-pointer"
      />
      <div className="flex flex-col fixed z-150 bottom-0 h-5/6 w-full bg-white rounded-t-md overflow-hidden">
        <div className="flex m-unit-4">
          <img
            onClick={onCloseClick}
            className="ml-auto cursor-pointer"
            src={closeIcon}
          />
        </div>
        <div className="flex flex-col px-unit-4 flex-1">
          <h1 className="heading">{heading}</h1>
          {children}
        </div>
      </div>
    </>
  )
}
