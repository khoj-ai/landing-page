import '../styles/Waitlist.css';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input, SubmitButton, Select } from 'formik-antd'
import { useState } from 'react';


export function Waitlist() {
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
	});

	const APIURL = process.env.REACT_APP_KHOJ_API_URL ?? 'http://localhost:5000/beta/users/';
	return (
		<section className='core-page'>
			<h2 className='title'>Join the Waitlist</h2>
			<div className='waitlist-form'>
				<Formik
					initialValues={{ email: '', firstName: '', lastName: '', interest: '' }}
					validationSchema={SignupSchema}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							fetch(`${APIURL}`, {
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
						<Form className='waitlist-form'>
							<Input
								className='waitlist'
								placeholder="input email"
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								status={(errors.email && touched.email) ? "error" : ""}
								addonBefore="Email"
							/>
							<label className='waitlist'>
								Which of the following best describes your industry?
							</label>
							<Select 
								name="interest"
								placeholder="What's your area of interest?"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.interest}
							>
								<Select.Option value="Art">Art</Select.Option>
								<Select.Option value="Business">Business</Select.Option>
								<Select.Option value="Education">Education</Select.Option>
								<Select.Option value="Health">Health</Select.Option>
								<Select.Option value="Science">Science</Select.Option>
								<Select.Option value="Technology">Technology</Select.Option>
								<Select.Option value="Research">Research</Select.Option>
								<Select.Option value="Other">Other</Select.Option>
							</Select>
							<SubmitButton disabled={false} loading={isSubmitting}>
								Submit
							</SubmitButton>
						</Form>
					)}
				</Formik>
				{
					success ? <p>Thank you for joining the waitlist!</p> : null
				}
				{
					failed ? <p>Sorry, something went wrong. Please try again.</p> : null
				}
			</div>
		</section>
	);
}

export default Waitlist;