export default function OutputTable({ investData }) {

  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>  
          </tr>
        </thead>
        {/* <tbody>
          {investData.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.investmentValue}</td>
              <td>{item.interestYear}</td>
              <td>{item.totalInterest}</td>
              <td>{item.investedCapital}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </section>
  );
}