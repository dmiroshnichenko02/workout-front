/* eslint-disable no-unused-vars */
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../../../ui/loader/Loader'

import styles from './Workout.module.scss'

import WorkoutLogService from '../../../../services/workout/workout-log.service'

import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import { useQuery } from '@tanstack/react-query'

const Workout = () => {
	const { id } = useParams()

	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ['get workout', id],
		queryFn: () => WorkoutLogService.getById(id),
		select: data => data?.data
	})
	return (
		<>
			<HeaderWorkout data={data} isSuccess={isSuccess} />
			<div
				style={{ paddingLeft: 0, paddingRight: 0 }}
				className='wrapper-inner-page'
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{data?.exerciseLogs.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 && index !== data.exerciseLogs.length - 1 && (
									<div className={styles.line}></div>
								)}
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Workout
