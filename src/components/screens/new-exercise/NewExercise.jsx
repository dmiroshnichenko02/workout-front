/* eslint-disable no-unused-vars */
import cn from 'clsx'
import { Controller } from 'react-hook-form'

import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './NewExercise.module.scss'

import Layout from '../../layout/Layout'

import { getIconPath } from './image-path.util'
import { useNewExercisePage } from './useNewExercisePage'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']
const NewExercise = () => {
	const {
		errors,
		error,
		isLoading,
		isSuccess,
		handleSubmit,
		onSubmit,
		register,
		control
	} = useNewExercisePage()
	return (
		<>
			<Layout
				bgImage='/images/new-exercise-bg.jpg'
				heading='Create new exercise'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
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
					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times should be greater than 0',
							required: 'Times is required'
						}}
						placeholder='Enter times'
						type='text'
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>
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

export default NewExercise
