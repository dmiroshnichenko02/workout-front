/* eslint-disable react/prop-types */
// import { useAuth } from '../../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import styles from './Header.module.scss'

import Hamburger from '../hamburger/Hamburger'

import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'

const Header = ({ backLink = '' }) => {
	const { isAuth } = useAuth()

	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<>
			<header className={styles.header}>
				{pathname !== '/' ? (
					<button
						onClick={() => {
							navigate(backLink)
						}}
					>
						<IoMdArrowBack color='white' fontSize={29} />
					</button>
				) : (
					<button
						onClick={() => {
							isAuth ? navigate('/profile') : navigate('/auth')
						}}
					>
						<SlUser color='white' fontSize={25} />
					</button>
				)}
				<Hamburger />
			</header>
		</>
	)
}

export default Header
