import React from "react"

import { Routes as Router, Route } from "react-router-dom"

import "./App.css"
import { AddCardPage } from "./pages/AddCardPage"
import { EditCardPage } from "./pages/EditCardPage"
import { LandingPage } from "./pages/LandingPage"
import { Routes } from "./Routes"

function App() {
  return (
    <div className="h-full">
      <LandingPage />
      <Router>
        <Route path={Routes.ADD_CARD} element={<AddCardPage />} />
        <Route
          path={`${Routes.EDIT_CARD}/:cardIndex`}
          element={<EditCardPage />}
        />
      </Router>
    </div>
  )
}

export default App
