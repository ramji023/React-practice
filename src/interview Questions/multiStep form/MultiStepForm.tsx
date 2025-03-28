import { useState } from "react";
import PersonalData from "./PersonalData";
import Address from "./Address";
import Consent from "./Consent";
import SuccessForm from "./SuccessForm";
const MultiStepForm = () => {

    const [step, setStep] = useState(1);
    const [multiformData, setMultiFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        address: '',
        city: '',
        postalCode: '',
        area: '',
        consent: false,
    })

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);
  

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setMultiFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
      const handleSubmit = () => {
        console.log("Form submitted:", multiformData);
        setStep(4);
      };
    
    const render = () => {
        switch (step) {
            case 1:
                return (<PersonalData formData={multiformData} handleChange={handleChange} nextStep={nextStep} />);
            case 2:
                return (<Address formData={multiformData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />);
            case 3:
                return (<Consent formData={multiformData} handleChange={handleChange}  prevStep={prevStep} handleSubmit={handleSubmit} />);
            case 4:
                return (<SuccessForm />);
        }
    }
    return (
        <>
            {render()}
        </>
    )
}

export default MultiStepForm;