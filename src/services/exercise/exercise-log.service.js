import { $axios } from '../../api'

import { EXERCISE } from './exercise.service'

const LOG = `${EXERCISE}/log`

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}
	// exercideId
	async create(exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}

	// weight, repeat
	async updateTime(timeId, body) {
		return $axios.put(`${LOG}/time/${timeId}`, body)
	}

	// isCompleted
	async complete(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
