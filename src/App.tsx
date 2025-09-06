import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalData from "./pages/PersonalData/PersonalData";
import AddressJobData from "./pages/AdressJobData/AdressJobData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalData />} />
        <Route path="/address-job" element={<AddressJobData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;