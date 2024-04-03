import ExerciseService from '../../../services/exercise/exercise.service'

import { useQuery } from '@tanstack/react-query'

export const useListExercises = () =>
	useQuery({
		queryKey: ['list exercises'],
		queryFn: () => ExerciseService.getAll(),
		select: ({ data }) => data
	})
