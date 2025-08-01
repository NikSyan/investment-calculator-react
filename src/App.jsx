import { useState } from "react";
import Header from "./components/Header.jsx";
import InputBody from "./components/InputBody";
import OutputTable from "./components/OutputTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput(prev => ({
      ...prev,
      [inputIdentifier]: +newValue
    }));
  }

  return (
    <>
      <Header />
      <InputBody onChange={handleInputChange} userInput={userInput} />
      <OutputTable userInput={userInput} />
    </>
  );
}

export default App
