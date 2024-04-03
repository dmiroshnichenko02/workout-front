import { $axios } from '../api'

const USERS = 'users'

class UserService {
	async getProfile() {
		try {
			return $axios.get(`/${USERS}/profile`)
		} catch (error) {
			console.log(error)
		}
	}
}

export default new UserService()
