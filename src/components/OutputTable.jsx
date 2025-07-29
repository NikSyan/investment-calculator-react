export default function OutputTable({  }) {
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
        <tbody>
          <tr>
            <td>1</td>
            <td>$10,000</td>
            <td>$500</td>
            <td>$500</td>
            <td>$10,000</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}