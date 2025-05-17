import { formatter } from "../util/investment.js";

export default function Result({ annualinvestment }) {
  const initialInvestment =
    annualinvestment[0].valueEndOfYear -
    annualinvestment[0].interest -
    annualinvestment[0].annualInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <td>
              <p>Year</p>
            </td>
            <td>
              <p>Investment Value</p>
            </td>
            <td>
              <p>Interest(Year)</p>
            </td>
            <td>
              <p>Total Interest</p>
            </td>
            <td>
              <p>Invested Capital</p>
            </td>
          </tr>
        </thead>
        <tbody>
          {annualinvestment.map((data, index) => {
            const totalInterest =
              data.valueEndOfYear -
              data.annualInvestment * data.year -
              initialInvestment;
            const totalAmountInvested = data.valueEndOfYear - totalInterest;
            return (
              <tr key={index}>
                <td>
                  <p>{data.year}</p>
                </td>
                <td>
                  <p>${formatter.format(data.valueEndOfYear)}</p>
                </td>
                <td>
                  <p>${formatter.format(data.interest)}</p>
                </td>
                <td>
                  <p>${formatter.format(totalInterest)}</p>
                </td>
                <td>
                  <p>${formatter.format(totalAmountInvested)}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
