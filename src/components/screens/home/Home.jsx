/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import styles from './Home.module.scss'

import Layout from '../../layout/Layout'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/* Counters */}
		</Layout>
	)
}

export default Home
