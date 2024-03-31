/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './Auth.module.scss'

import Layout from '../../layout/Layout'

const Auth = () => {
	const isLoading = false
	const isLoadingAuth = false

	const [type, setType] = useState('auth')
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}

	console.log(errors)

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						type='text'
						name='email'
						register={register}
						placeholder='Enter email'
						options={{ required: 'Email is required' }}
					/>
					<Field
						error={errors?.password?.message}
						type='password'
						name='password'
						register={register}
						placeholder='Enter password'
						options={{ required: 'Password is required' }}
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
