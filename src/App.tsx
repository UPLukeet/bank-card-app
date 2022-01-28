import React from "react"

import { Routes as Router, Route } from "react-router-dom"

import "./App.css"
import { AddCardPage } from "./pages/AddCardPage"
import { LandingPage } from "./pages/LandingPage"
import { Routes } from "./Routes"

function App() {
  return (
    <div className="h-full">
      <LandingPage />
      <Router>
        <Route path={Routes.ADD_CARD} element={<AddCardPage />} />
      </Router>
    </div>
  )
}

export default App
