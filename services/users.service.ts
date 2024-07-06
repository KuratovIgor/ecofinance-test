import type { UserType } from '@/types/user.type'

export default class UsersService {
    public static async getUsers(page: number): Promise<UserType[]> {
        const response =  await $fetch<UserType[]>('/api/users', {
            query: { page },
        })

        return response
    }
}