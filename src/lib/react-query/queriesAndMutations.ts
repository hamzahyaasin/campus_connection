import { INewUser } from '@/types'
import{
    useQuery,
    useMutations,
    useQueryClient,
    useInfiniteQuery,
    useMutation
} from '@tanstack/react-query'
import { createUserAccount } from '../appwrite/api'


export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    })
}

export const useSignInAccount  = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    })
}