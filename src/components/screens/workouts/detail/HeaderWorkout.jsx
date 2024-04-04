/* eslint-disable react/prop-types */
import cn from 'clsx'

import stylesLayout from '../../../layout/Layout.module.scss'
import styles from './Workout.module.scss'

import Header from '../../../layout/header/Header'

const HeaderWorkout = ({ isSuccess, data }) => {
	return (
		<>
			<div
				style={{
					backgroundImage: `url('/images/workout-bg.jpg')`,
					height: 356
				}}
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			>
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.date}>{data.minutes + ' min.'}</time>
						<h1 className={stylesLayout.heading}>{data.workout.name}</h1>
					</div>
				)}
			</div>
		</>
	)
}

export default HeaderWorkout
