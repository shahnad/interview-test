import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .max(35, "Maximum length of email should be within 35 characters")
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?=.*[a-z]).*$/, 'Password must contain at least one uppercase letter, one number, and one special character')
        .required('Required')
})
