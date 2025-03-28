const Consent = ({ formData, handleChange, prevStep, handleSubmit }) => {
    return (
        <>
            <input type="checkbox" name="consent" value={formData.consent} onChange={handleChange} /> I have successfully entered right information
            <button onClick={prevStep}>prev</button>
            <button onClick={handleSubmit}>submit </button>
        </>
    )
}
export default Consent;