import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [annualData_Inp, setAnnualData_Inp] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = annualData_Inp.duration >= 1;

  function onInputChange(e) {
    const { name, value } = e.target;
    setAnnualData_Inp((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  }
  const annualData = calculateInvestmentResults(annualData_Inp);

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            userLabel={"Initial Investment"}
            inputFunc={onInputChange}
            inputName={"initialInvestment"}
          />
          <UserInput
            userLabel={"Annual Investment"}
            inputFunc={onInputChange}
            inputName={"annualInvestment"}
          />
        </div>
        <div className="input-group">
          <UserInput
            userLabel={"Expected Retrun"}
            inputFunc={onInputChange}
            inputName={"expectedReturn"}
          />
          <UserInput
            userLabel={"Duration"}
            inputFunc={onInputChange}
            inputName={"duration"}
          />
        </div>
      </section>
      {isInputValid ? (
        <Result annualinvestment={annualData} />
      ) : (
        <p className="center">Please enter a duration greater then 0</p>
      )}
    </>
  );
}

export default App;
