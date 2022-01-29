import { createContext, ReactChild, useContext, useState } from "react"
import { CardDetails } from "../types/cardDetails"

type CardContextProps = {
  savedCards: CardDetails[]
  addCard: (card: CardDetails) => void
  updateCard: (idx: number, card: CardDetails) => void
  deleteCard: (idx: number) => void
}

const CardContext = createContext<CardContextProps>({
  savedCards: [],
  addCard: () => {},
  updateCard: () => {},
  deleteCard: () => {},
})

export const useCardContext = () => {
  return useContext(CardContext)
}

interface CardContextProviderProps {
  children: ReactChild
}

export const CardContextProvider = ({ children }: CardContextProviderProps) => {
  const [savedCards, setSavedCards] = useState<CardDetails[]>([])

  const addCard = (card: CardDetails) => {
    setSavedCards((prevState) => [...prevState, card])
  }

  const updateCard = (idx: number, card: CardDetails) => {
    savedCards[idx] = card
  }

  const deleteCard = (idx: number) => {
    savedCards.splice(idx, 1)
  }

  const values = { savedCards, addCard, updateCard, deleteCard }

  return <CardContext.Provider value={values}>{children}</CardContext.Provider>
}
