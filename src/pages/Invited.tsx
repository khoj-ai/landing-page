import { useState, useRef } from 'react';
import { Input, SubmitButton } from 'formik-antd'
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { APIURL, DISCORD_LINK } from '../common/constants';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';


import '../styles/Invited.css';

enum Status {
	Loading,
	ValidInvite,
	Success,
	NotFound,
	Used,
	Oops,
}

interface ValidInviteResponse {
	email: string;
}

interface SetPasswordResponse {
	errors: string[];
}


export function Invited() {
	const { inviteId } = useParams<{ inviteId: string }>();
	const navigate = useNavigate();
	const [status, setStatus] = useState<Status>(Status.Loading);
	const [email, setEmail] = useState<string>('');
	const [checkedInvite, setCheckedInvite] = useState<boolean>(false);
	const PasswordSchema = Yup.object().shape({
		password: Yup.string().required('Required').min(8, 'Must be 8 characters or more'),
		confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password')], 'Passwords must match'),
	});

	if (inviteId === undefined || inviteId === null || inviteId === '') {
		navigate('/');
	} else {
		if (!checkedInvite) {
			fetch(`${APIURL}/beta/invite/${inviteId}/`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				})
				.then(response => 
					{
						if (response.status === 404) {
							setStatus(Status.NotFound);
						} else if (response.status === 200) {
							setStatus(Status.ValidInvite);
						} else if (response.status === 410) {
							setStatus(Status.Used);
						} else {
							setStatus(Status.Oops);
						}
						return response.json();
					})
				.then((data: ValidInviteResponse) => {
					if (data.email !== undefined) {
						setEmail(data.email);
					}
				})
				.catch((error) => {
					setStatus(Status.Oops);
				});
			setCheckedInvite(true);
		}
	}

	function NotFoundComponent() {
		return (
			<section className='core-page'>
				<h2 className='title'>Sorry, looks like that URL isn't valid.</h2>
				<p className='invited-title'>Your invite link is invalid. Please contact the person who invited you or message the team on <a className='inline-link-light' href={DISCORD_LINK}>Discord</a> for support.</p>
			</section>
		);
	}

	function SetPasswordComponent() {
		return (
			<section className='core-page'>
				<h2 className='title'>Welcome to the platform! We're psyched to have you here.</h2>
				<p className='invited-title'>Please set a password for your account.</p>
				<p className='invited-title'><b>{email}</b></p>
				<Formik
					initialValues={{ password: '', confirmPassword: '' }}
					validationSchema={PasswordSchema}
					onSubmit={(values, { setSubmitting, setErrors },) => {
						setTimeout(() => {
							fetch(`${APIURL}/beta/invite/${inviteId!}/set-password/`, {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									password: values.password,
								})
							})
								.then(response =>
									{
										if (response.status === 200) {
											setStatus(Status.Success);
											return response;
										} else if (response.status === 410) {
											setStatus(Status.Used);
										} else if(response.status == 400) {
											setStatus(Status.ValidInvite);
										} else {
											setStatus(Status.Oops);
										}
										return response.json();
									})
									.then((data: SetPasswordResponse) => {
										if (data.errors) {
											setErrors({confirmPassword: data.errors[0]});
										}
									})
								.catch((error) => {
									setStatus(Status.Oops);
							});
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting, errors }) => (
						<Form className='invited-form'>
							<Input.Password
								id="password"
								name="password"
								placeholder='Password'
								style={{ marginBottom: '1rem' }}
							/>
							<div className='error-message'>{errors.password}</div>
							<Input.Password
								id="confirmPassword"
								name="confirmPassword"
								placeholder='Confirm Password'
								style={{ marginBottom: '1rem' }}
							/>
							<div className='error-message'>{errors.confirmPassword}</div>
							<SubmitButton size='large' type="primary" disabled={isSubmitting}>
								Set Password
							</SubmitButton>
						</Form>
					)}
				</Formik>
			</section>
		)
	}

	function UsedComponent() {
		return (
			<section className='core-page'>
				<h2 className='title'>Looks like that invite is already claimed.</h2>
				<p className='invited-title'>Click <a className='inline-link-light' href="/login">here to</a> login. Contact us at <a className='inline-link-light' href='mailto:team@khoj.dev'>team@khoj.dev</a> or on <a className='inline-link-light' href={DISCORD_LINK}>Discord</a> for support.</p>
			</section>
		)
	}

	function LoadingComponent() {
		return (
			<section className='core-page'>
				<h2 className='title'>Loading...</h2>
			</section>
		)
	}

	function OopsComponent() {
		return (
			<section className='core-page'>
				<h2 className='title'>Oops, something went wrong.</h2>
				<p className='invited-title'>Please contact the team on at <a className='inline-link-light' href='mailto:team@khoj.dev'>team@khoj.dev</a> <a className='inline-link-light' href={DISCORD_LINK}>Discord</a> for support.</p>
			</section>
		)
	}

	function SuccessComponent() {
		return (
			<section className='core-page'>
				<h2 className='title'>Success! 🎉</h2>
				<p className='invited-title'>Your password has been set. Click <a className='inline-link-light' href="/login">here to</a> login.</p>
			</section>
		)
	}

	return (
		<>
			{status === Status.Loading && <LoadingComponent />}
			{status === Status.ValidInvite && <SetPasswordComponent />}
			{status === Status.NotFound && <NotFoundComponent />}
			{status === Status.Used && <UsedComponent />}
			{status === Status.Oops && <OopsComponent />}
			{status === Status.Success && <SuccessComponent />}
		</>
	);
}

export default Invited;