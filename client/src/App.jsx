import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
function App() {
  return (
    <BrowserRouter>
    <main className="xl:container xl:mx-auto">
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
    </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App