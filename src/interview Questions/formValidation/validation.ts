const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*\d).{6,}$/;
const nameRegex = /^[a-zA-Z]{3,}$/;
export function emailValidation(email: string) {
    return emailRegex.test(email);
}

export function passwordValidation(password: string) {
    return passwordRegex.test(password);
}

export function nameValidation(name: string) {
    return nameRegex.test(name);
}