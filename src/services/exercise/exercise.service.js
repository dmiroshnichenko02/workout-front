import { $axios } from '../../api'

export const EXERCISE = '/exercises'

class ExerciseService {
	async getAll() {
		return $axios.get(EXERCISE)
	}
	//name, times, iconPath
	async create(body) {
		return $axios.post(EXERCISE, body)
	}

	async update(id, body) {
		return $axios.put(`${EXERCISE}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${EXERCISE}/${id}`)
	}
}

export default new ExerciseService()
