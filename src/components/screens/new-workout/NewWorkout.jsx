/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './NewWorkout.module.scss'

import Layout from '../../layout/Layout'

import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']
const NewWorkout = () => {
	const {
		errors,
		error,
		isLoading,
		isSuccess,
		handleSubmit,
		onSubmit,
		register,
		control
	} = useNewWorkout()
	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						placeholder='Enter name'
						type='text'
					/>
					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} />
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}
					<div className={styles.wrapperButtons}>
						<Button>Create</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
