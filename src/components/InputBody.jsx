export default function InputBody() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number" required/>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" required />
        </p>
      </div>
      <div class="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" required/>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  )
}