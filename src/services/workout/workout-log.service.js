import { $axios } from '../../api'

import { WORKOUT } from './workout.service'

const LOG = `${WORKOUT}/log`

class WorkoutLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}
	// exercideId
	async create(workoutId) {
		return $axios.post(`${LOG}/${workoutId}`)
	}

	// isCompleted
	async complete(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new WorkoutLogService()
