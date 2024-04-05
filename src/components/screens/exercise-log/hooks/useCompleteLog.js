/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'

import { useMutation } from '@tanstack/react-query'

export const useCompleteLog = times => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { mutate, error: errorCompleted } = useMutation({
		mutationKey: ['update log time'],
		mutationFn: body => ExerciseLogService.complete(id, body),
		onSuccess: ({ data }) => {
			navigate(`/workout/${data.workoutLogId}`)
		}
	})

	return { completeLog: mutate, errorCompleted }
}
