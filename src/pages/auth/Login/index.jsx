import React from 'react'
import { useDispatch, } from 'react-redux';
import { Row, Form, Button, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../../utils/validations';
import { loginSuccess } from '../../../features/authentication/authSlice';
import { toast } from 'react-toastify';
import "./index.scss"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            keepmeSigned: false
        },
        validationSchema: loginSchema,
        onSubmit: (user) => {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(loginSuccess(user));
            toast.success("Logged in successfully!");
            navigate('/home');
        }
    });

    const isValid = (formik.isValid && formik?.touched.email && formik?.touched.password) || false

    return (
        <div className='login-layout'>
            <div className='title-container d-flex flex-column'>
                <h1>Sign In</h1>
                <div className='d-flex flex-row gap-2 my-2'>
                    <div className='text-16 text-black-500 bold w-fit'>New user? </div>
                    <div className='link text-16 bold'> Create an account </div>
                </div>
            </div>

            <Form onSubmit={formik.handleSubmit} validated={isValid} className='login-form d-flex flex-column gap-3'>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Control type="text" placeholder='Username or email'
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        isValid={formik?.touched.email && !formik?.errors.email}
                        isInvalid={formik?.touched.email && formik?.errors.email}
                    />
                    {formik?.touched.email && !formik?.errors.email && <Form.Control.Feedback type={"valid"}> Looks good! </Form.Control.Feedback>}
                    {formik?.touched.email && formik?.errors.email &&
                        <Form.Control.Feedback type={"invalid"}> {formik?.errors.email} </Form.Control.Feedback>}
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Control type="password" placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        isValid={formik?.touched.password && !formik?.errors.password}
                        value={formik.values.password}
                        isInvalid={formik?.touched.password && formik?.errors.password}
                    />
                    {formik?.touched.password && !formik?.errors.password && <Form.Control.Feedback type={"valid"}> Looks good! </Form.Control.Feedback>}
                    {formik?.touched.password && formik?.errors.password &&
                        <Form.Control.Feedback type={"invalid"}> {formik?.errors.password} </Form.Control.Feedback>}
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Check
                        color='primary' name="keepmeSigned" onChange={formik.handleChange}
                        checked={formik.values.keepmeSigned}
                        label="keep me signed in"
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button className='submit-btn' type="submit" variant="primary">Sign In</Button>
            </Form>

            <div className='sigin-text ' >
                <div className='divider'></div>
                <p className='text'>
                    Or Signin With
                </p>
            </div>
            <div className='social-media-images'>
                <Image src="/images/social-media.png" rounded />
            </div>


        </div>

    )
}

export default React.memo(Login)