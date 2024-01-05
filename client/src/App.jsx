import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActiveProvider } from "./context/ActiveContext";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <ActiveProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Routes>
      </ActiveProvider>
    </BrowserRouter>
  );
}

export default App;
