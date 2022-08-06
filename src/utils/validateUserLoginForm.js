export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = "Username required";
    } else if (values.username.length < 6 || values.username.length > 15) {
        errors.username = "Must be between 6 & 15 characters";
    }
    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 7) {
        errors.password = "Must be at least 8 characters";
    }

    return errors;
};