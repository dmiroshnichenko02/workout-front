/* eslint-disable react/prop-types */
import styles from './Field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div>
			<input {...register(name, options)} {...rest} className={styles.input} />
			<div>{error && <span className={styles.error}>{error}</span>}</div>
		</div>
	)
}

export default Field
