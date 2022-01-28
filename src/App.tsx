import React from "react"
import "./App.css"
import { PopupModal } from "./components/PopupModal"
import { LandingPage } from "./pages/LandingPage"

function App() {
  return (
    <div className="h-full">
      <LandingPage />
      <PopupModal />
    </div>
  )
}

export default App
