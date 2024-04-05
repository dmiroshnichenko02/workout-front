/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'

import { useCompleteLog } from './useCompleteLog'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateLogTime = times => {
	const { completeLog, errorCompleted } = useCompleteLog()
	const { id } = useParams()
	const queryClient = useQueryClient()
	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['update log time'],
		mutationFn: ({ timeId, body }) =>
			ExerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get exercise log', id] })
			const filteredTimes = times.filter(time => time.isCompleted)

			console.log(filteredTimes.length, times.length)
			if (filteredTimes.length === times.length) {
				completeLog({ isCompleted: true })
			}
		}
	})

	return { updateTime: mutate, error: errorChange || errorCompleted }
}
