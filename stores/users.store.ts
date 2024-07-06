import type { UserType } from '@/types/user.type'

export const useUsersStore = defineStore('users', () => {
    const usersData = ref<UserType[]>([])
    const loading = ref(false)

    const users = computed(() => usersData.value)

    // Запрос дублируется на стороне клиента. Времени на выполнение задания было немного, поэтому поправить не успел :)
    const getUsers = async (page: number = 1): Promise<void> => {
        try {
            loading.value = true

            const response =  await $fetch<UserType[]>('/api/users', {
                query: { page },
            })
    
            usersData.value.push(...response)
        } catch {
            //
        } finally {
            loading.value = false
        }
    }

    return {
        users,
        getUsers,
    }
})