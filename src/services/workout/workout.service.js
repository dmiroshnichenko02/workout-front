import { $axios } from '../../api'

export const WORKOUT = '/workouts'

class WorkoutService {
	async getAll() {
		return $axios.get(WORKOUT)
	}

	async getById(id) {
		return $axios.get(`${WORKOUT}/${id}`)
	}
	//name, exercisesIds[]
	async create(body) {
		return $axios.post(WORKOUT, body)
	}

	async update(id, body) {
		return $axios.put(`${WORKOUT}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${WORKOUT}/${id}`)
	}
}

export default new WorkoutService()
