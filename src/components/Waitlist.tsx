import '../styles/Waitlist.css';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input, SubmitButton } from 'formik-antd'
import { useState } from 'react';


export function Waitlist() {
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
	});

	const APIURL = process.env.NODE_ENV == 'production' ? "https://lantern.khoj.dev" : 'http://localhost:5000';

	return (
			<div className='signup-bar'>
				<Formik
					initialValues={{ email: '', interest: '' }}
					validationSchema={SignupSchema}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							fetch(`${APIURL}/beta/users/`, {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(values)
							})
							.then(response => 
								{
									if (!response.ok) {
										setFailed(true);
										setSuccess(false);
										throw new Error('Network response was not ok');
									}
									setSuccess(true);
									setFailed(false);
									return response.json()
							})
							.catch((error) => {
								console.log(error);
							});
							setSubmitting(false);
						}, 400);
					}
					}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						isSubmitting,
						/* and other goodies */
					}) => (
						<div className='signup-bar'>
							<p className="signup-description">Sign up to get an early invite to Khoj cloud</p>
							<Form className='signup-form'>
								<Input
									type="email"
									name="email"
									placeholder="Enter your email address"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									status={(errors.email && touched.email) ? "error" : ""}
								/>
								<SubmitButton size='large' disabled={false} loading={isSubmitting} style={{padding: '5px 10px'}}>
									Sign up
								</SubmitButton>
							</Form>
						</div>
					)}
				</Formik>
				{
					success ? <p>Thank you for joining the waitlist!</p> : null
				}
				{
					failed ? <p>Sorry, something went wrong. Please try again.</p> : null
				}
			</div>
	);
}

export default Waitlist;