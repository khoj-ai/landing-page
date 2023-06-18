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
			<div className='waitlist-bar'>
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
										throw new Error('📵 Network response was not ok');
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
						<div className="waitlist-spacer">
							<div></div>
							<div className='waitlist-inner-bar'>
								<p className="waitlist-description">Get an early invite to Khoj cloud</p>
								<Form className='waitlist-form'>
									<Input
										type="email"
										name="email"
										placeholder="Enter your email address"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
										status={(errors.email && touched.email) ? "error" : ""}
									/>
									<SubmitButton size='large' disabled={false} loading={isSubmitting} style={{padding: '9px'}}>
										Join
									</SubmitButton>
								</Form>
							</div>
							<div></div>
						</div>
					)}
				</Formik>
				{
					success ? <p>Thanks for requesting early access 🌈! We'll reach out shortly. Until then take this short <a href="https://forms.gle/FRe6XPkcgkKsVbzC9">survey</a> to guide our feature development roadmap.</p> : null
				}
				{
					failed ? <p>Woops, that did not go as expected 😵‍💫. Try again or contact <a href="mailto:team@khoj.dev">team@khoj.dev</a></p> : null
				}
			</div>
	);
}

export default Waitlist;