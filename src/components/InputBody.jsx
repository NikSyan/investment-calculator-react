import { useState } from "react";

export default function InputBody({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input 
            name="initialInvestment" 
            type="number" 
            value={userInput.initialInvestment}
            required onChange={(e) => onChange('initialInvestment', e.target.value)}/>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input 
            name="annualInvestment" 
            type="number" 
            value={userInput.annualInvestment} 
            required onChange={(e) => onChange('annualInvestment', e.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input 
            name="expectedReturn" 
            type="number" 
            value={userInput.expectedReturn} 
            required onChange={(e) => onChange('expectedReturn', e.target.value)}/>
        </p>
        <p>
          <label>DURATION</label>
          <input 
            name="duration" 
            type="number" 
            value={userInput.duration} 
            required onChange={(e) => onChange('duration', e.target.value)}/>
        </p>
      </div>
    </section>
  )
  }
