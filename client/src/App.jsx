import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActiveProvider } from "./context/ActiveContext";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <ActiveProvider>
        <HomePage></HomePage>
      </ActiveProvider>
    </BrowserRouter>
  );
}

export default App;
