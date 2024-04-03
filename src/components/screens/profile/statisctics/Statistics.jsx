import styles from './Statistics.module.scss'

import { useProfile } from '../useProfile'

const Statistics = () => {
	const { data } = useProfile()

	return (
		<div className={styles.wrapper}>
			{data?.statistics?.map((statistic, index) => (
				<div className={styles.count} key={index}>
					<div className={styles.heading}>{statistic.label}</div>
					<div className={styles.number}>{statistic.value}</div>
				</div>
			))}
		</div>
	)
}

export default Statistics
