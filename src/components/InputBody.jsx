export default function InputBody({ investData, onHandleUpdates }) {
  
  function handleInputChange(event) {
    const { name, value } = event.target;

    const updatedData = {
      ...investData,
      [name]: value
    }
    
    onHandleUpdates(updatedData);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input name="initialInvestment" type="number" required onChange={handleInputChange}/>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input name="annualInvestment" type="number" required onChange={handleInputChange}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input name="expectedReturn" type="number" required onChange={handleInputChange}/>
        </p>
        <p>
          <label>DURATION</label>
          <input name="duration" type="number" required onChange={handleInputChange}/>
        </p>
      </div>
    </section>
  )
}