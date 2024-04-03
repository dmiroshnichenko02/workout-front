import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import AuthService from '../services/auth.service'

import { useAuth } from './useAuth'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAuthPage = () => {
	const [type, setType] = useState('login')

	const queryClient = useQueryClient()
	const { isAuth, setIsAuth } = useAuth()

	const { mutate, isLoading } = useMutation({
		// queryKey: ['auth'],
		mutationFn: ({ email, password }) => {
			console.log(email, password, type)
			return AuthService.main(email, password, type)
		},
		onSuccess: () => {
			setIsAuth(true)
			queryClient.invalidateQueries({ queryKey: ['auth'] })
		}
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	const onSubmit = data => {
		mutate(data)

		reset()
	}

	return useMemo(
		() => ({
			setType,
			isLoading,
			register,
			handleSubmit,
			errors,
			onSubmit
		}),
		[errors, isLoading, register, handleSubmit, onSubmit, setType]
	)
}
