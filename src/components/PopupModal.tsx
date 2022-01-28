import closeIcon from "../assets/icons/close-icon.svg"

export const PopupModal = () => {
  return (
    <>
      <div className="absolute top-0 h-full w-full z-100 bg-grey-90 opacity-80" />
      <div className="absolute bottom-0 h-5/6 w-full bg-white rounded-t-md">
        <div className="flex m-unit-4">
          <img className="ml-auto cursor-pointer" src={closeIcon} />
        </div>
      </div>
    </>
  )
}
