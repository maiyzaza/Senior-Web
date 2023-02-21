import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'

import Login from './components/login/Login'
import RoomManagement from './components/staff/it/pages/RoomManagement';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Login />} />
        <Route path="/" element={<RoomManagement />} />
      </Routes>
    </Router>
  )
}

export default App
