import type { UserType } from '@/types/user.type'

export const useUsersStore = defineStore('users', () => {
    const usersData = ref<UserType[]>([])

    const users = computed(() => usersData.value)

    const setUsers = (users: UserType[]): void => {
        usersData.value = users
    }

    const addUsers = (users: UserType[]): void => {
        usersData.value.push(...users)
    }

    return {
        users,
        setUsers,
        addUsers,
    }
})