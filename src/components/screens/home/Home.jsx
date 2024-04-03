/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import styles from './Home.module.scss'

import Layout from '../../layout/Layout'
import Statistics from '../profile/statisctics/Statistics'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.jpg' backLink='/'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
