import UserService from '../../../services/user.service'

import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
	return useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data
	})
}
