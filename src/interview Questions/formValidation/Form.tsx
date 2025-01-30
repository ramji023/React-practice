import { useState } from "react";
import { passwordValidation, nameValidation, emailValidation } from "./validation";
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState<string>("");
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!nameValidation(formData.name)) {
            throw setError("Name must be at least 3 characters long.")
        }
        if (!emailValidation(formData.email)) {
            throw setError("Email: Must be a valid email.")
        }
        if (!passwordValidation(formData.password)) {
            throw setError("Password: Must be at least 6 characters long.")
        }

        console.log("submit form data is : ", formData)
        setFormData({
            name: "",
            email: "",
            password: "",
        })
        setError("");
    }
    return (
        <>
            <h1>form validation</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formData.name} placeholder="enter the name" onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} />
                <input type="email" value={formData.email} placeholder="enter the email" onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} />
                <input type="password" value={formData.password} placeholder="enter the password" onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))} />
                <input type="submit" />
            </form>
            {error && <p>{error}</p>}
        </>
    )
}

export default Form;