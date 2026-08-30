import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Alumni from './pages/Alumni'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App