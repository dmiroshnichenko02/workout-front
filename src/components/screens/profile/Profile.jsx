import cn from 'clsx'

import Loader from '../../ui/loader/Loader'

import stylesLayout from '../../layout/Layout.module.scss'
import styles from './Profile.module.scss'

import Header from '../../layout/header/Header'

import Statistics from './statisctics/Statistics'
import { useProfile } from './useProfile'

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<>
			<div
				style={{
					backgroundImage: `url('/images/profile-bg.jpg')`,
					height: 356
				}}
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			>
				<Header backLink='/' />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='/images/header/user.svg'
								alt='Profile'
								height='56'
								draggable='false'
							/>
							{<h1 className={stylesLayout.heading}>{data?.email}</h1>}
						</>
					)}
				</div>
				<Statistics />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={index}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img src={image} alt='' style={{ borderRadius: 13 }} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Profile
