/* eslint-disable no-unused-vars */
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import { useAuthPage } from '../../../hooks/useAuthPage'

import styles from './Auth.module.scss'

import Layout from '../../layout/Layout'

const Auth = () => {
	const { isLoading, errors, handleSubmit, onSubmit, register, setType } =
		useAuthPage()

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
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
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
