import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import ExerciseService from '../../../services/exercise/exercise.service'

import { useMutation } from '@tanstack/react-query'

export const useNewExercisePage = () => {
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
		mutationFn: body => ExerciseService.create(body),
		mutationKey: 'new exercise',
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
		reset()
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			isSuccess,
			error,
			isLoading,
			onSubmit
		}),
		[errors, isSuccess, error, isLoading]
	)
}
