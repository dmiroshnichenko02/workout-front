/* eslint-disable react/prop-types */
// import { useAuth } from '../../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import styles from './Header.module.scss'

import Hamburger from '../hamburger/Hamburger'

import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'

const Header = ({ backLink }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<>
			<header className={styles.header}>
				{isAuth && (
					<>
						{pathname === '/' && isAuth ? (
							<button
								aria-label='Go to profile'
								onClick={() => {
									navigate('/profile')
								}}
							>
								<SlUser color='white' fontSize={25} />
							</button>
						) : (
							<button
								aria-label='Go back'
								onClick={() => {
									navigate(isAuth ? backLink : '/auth')
								}}
							>
								<IoMdArrowBack color='white' fontSize={29} />
							</button>
						)}
						<Hamburger />
					</>
				)}
			</header>
		</>
	)
}

export default Header
