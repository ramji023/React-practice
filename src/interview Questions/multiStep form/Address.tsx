const Address = ({ formData, handleChange, nextStep, prevStep }) => {
    return (
        <>
            <label >Address</label>
            <input type="text" name="address"  value={formData.address} onChange={handleChange} placeholder="enter your address" />
            <label >City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="enter your city" />
            <label>Postal Code</label>
            <input type="number" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="enter the pincode" />
            <select name="area" value={formData.area} onChange={handleChange}>
                <option value="" disabled>select</option>
                <option value="Ruler">Ruler</option>
                <option value="Urban">Urban</option>
            </select>

            <button onClick={prevStep}>prev</button>
            <button onClick={nextStep}>next</button>
        </>
    )
}

export default Address