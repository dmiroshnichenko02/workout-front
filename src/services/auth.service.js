import Cookies from 'js-cookie'

import { $axios } from '../api'
import { TOKEN } from '../app.constants'

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`auth/${type}`, {
				email,
				password
			})

			console.log(data)
			if (data.token) {
				Cookies.set(TOKEN, data.token)
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export default new AuthService()
