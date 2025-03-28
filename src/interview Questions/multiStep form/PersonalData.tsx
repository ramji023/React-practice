const PersonalData = ({ formData, handleChange, nextStep }) => {
    return (
        <>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="enter your first name" />
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="enter your last name" />
            <label>Email id</label>
            <input type="text" name="emailId" value={formData.emailId} onChange={handleChange} placeholder="enter your personal email id" />
            <button onClick={nextStep}>Next</button>
        </>
    )
}

export default PersonalData