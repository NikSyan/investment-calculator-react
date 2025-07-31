import { useState } from "react";
import Header from "./components/Header";
import InputBody from "./components/InputBody";
import OutputTable from "./components/OutputTable";
import { calculateInvestmentResults } from "./util/investment.js"

function App() {
  const [investData, setInvestData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  const handleData = (updatedData) => {
    setInvestData(prev => {
      const newData = { ...prev, ...updatedData };
      const data = calculateInvestmentResults(newData);
      console.log(data);
      return newData;
    });
  }

  return (
    <>
      <Header />
      <InputBody investData={investData} onHandleUpdates={handleData} />
      {/* <OutputTable /> */}
    </>
  )
}

export default App
