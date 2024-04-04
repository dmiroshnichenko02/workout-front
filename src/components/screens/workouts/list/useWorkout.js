import { useNavigate } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import WorkoutService from '../../../../services/workout/workout.service'

import { useMutation, useQuery } from '@tanstack/react-query'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery({
		queryKey: ['get workouts'],
		queryFn: () => WorkoutService.getAll(),
		select: ({ data }) => data
	})
	const navigation = useNavigate()

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation({
		mutationKey: ['create new workout log'],
		mutationFn: workoutId => WorkoutLogService.create(workoutId),
		onSuccess: ({ data }) => {
			navigation(`/workout/${data.id}`)
		}
	})

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
