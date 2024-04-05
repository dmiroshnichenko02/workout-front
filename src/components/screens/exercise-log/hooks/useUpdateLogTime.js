/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateLogTime = () => {
	const { id } = useParams()
	const queryClient = useQueryClient()
	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['update log time'],
		mutationFn: ({ timeId, body }) =>
			ExerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get exercise log', id] })
		}
	})

	return { updateTime: mutate, errorChange }
}
