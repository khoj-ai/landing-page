import { useState } from 'react';
import { Input, SubmitButton } from 'formik-antd'
import { useNavigate } from "react-router-dom";
import { APIURL, DISCORD_LINK } from '../common/constants';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';


import '../styles/Login.css';

enum Status {
	Success,
	Unauthorized,
	Oops,
    Init,
}


export function Login() {
	const navigate = useNavigate();
	const [status, setStatus] = useState<Status>(Status.Init);
	const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
	});

	function LoginComponent() {
		return (
			<section className='core-page'>
				<h2 className='title'>Welcome back!</h2>
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={LoginSchema}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
                            const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken'))?.split('=')[1];
							fetch(`${APIURL}/auth/login/`, {
								method: 'POST',
                                credentials: 'include',
								headers: {
									'Content-Type': 'application/json',
                                    'X-CSRFToken': csrfToken || '',
								},
								body: JSON.stringify({
                                    email: values.email,
									password: values.password,
								})
                            })
								.then(response =>
									{
										console.log(response);
										console.log(response.status);
                                        if (response.status === 200) {
                                            navigate('/');
                                        } else if (response.status === 404) {
                                            setStatus(Status.Unauthorized);
                                        } else {
                                            setStatus(Status.Oops);
                                        }

										return response.json()
									})
								.catch((error) => {
									console.log(error);
							});
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting, errors }) => (
						<Form className='invited-form'>
							<Input
								id="email"
								name="email"
								placeholder='email'
								style={{ marginBottom: '1rem' }}
							/>
							<div className='error-message'>{errors.email}</div>
							<Input.Password
								id="password"
								name="password"
								placeholder='password'
								style={{ marginBottom: '1rem' }}
							/>
							<div className='error-message'>{errors.password}</div>
							<SubmitButton size='large' type="primary" disabled={isSubmitting}>
								Login
							</SubmitButton>
						</Form>
					)}
				</Formik>
			</section>
		)
	}

	function UnauthorizedComponent() {
		return (
			<section className='core-page'>
				<p className='invited-title'>Sorry, looks like those credentials are invalid.</p>
			</section>
		)
	}

	function OopsComponent() {
		return (
			<section className='core-page'>
				<h2 className='title'>Oops, something went wrong.</h2>
				<p className='invited-title'>Please contact the team on <a className='inline-link-light' href={DISCORD_LINK}>Discord</a> for support.</p>
			</section>
		)
	}


	return (
		<>
            <LoginComponent />
            {status === Status.Unauthorized && <UnauthorizedComponent />}
            {status === Status.Oops && <OopsComponent />}

		</>
	);
}

export default Login;