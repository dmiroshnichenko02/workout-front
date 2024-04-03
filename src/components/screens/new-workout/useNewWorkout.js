import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import WorkoutService from '../../../services/workout/workout.service'

import { useMutation } from '@tanstack/react-query'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, mutate, isLoading } = useMutation({
		mutationFn: body => WorkoutService.create(body),
		mutationKey: 'new workout',
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = data => {
		const { name, exercisesIds } = data
		mutate({
			name: name,
			exercisesIds: exercisesIds.map(exercise => exercise.value)
		})
		reset({
			name: '',
			exercisesIds: []
		})
	}

	return useMemo(() => {
		return {
			register,
			handleSubmit,
			errors,
			control,
			isSuccess,
			error,
			isLoading,
			onSubmit
		}
	}, [errors, isSuccess, error, isLoading])
}
