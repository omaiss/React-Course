export default function Result({ array }) {
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
          <tr>
            {/* <td>
              <p>{array[0]}</p>
            </td>
            <td>
              <p>{array[1]}</p>
            </td>
            <td>
              <p>{array[2]}</p>
            </td>
            <td>
              <p>{array[3]}</p>
            </td>
            <td>
              <p>{array[4]}</p>
            </td> */}
          </tr>
        </tbody>
      </table>
    </>
  );
}
