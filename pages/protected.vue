<template>
    <div class="protected-page">
        <div class="protected-page__header">
            <h1>Users</h1>
            <u-button color="red" @click="handleUserLogout">Logout</u-button>
        </div>

        <div v-if="!errorLoadingText" class="protected-page__cards">
            <user-card
                v-for="(user, index) of usersStore.users"
                :key="index"
                :user="user"
            />
        </div>
        <div v-else>{{ errorLoadingText }}</div>

        <u-button
            v-if="isClient"
            :loading="isLoading"
            block
            @click="handleUsersLoad"
        >
            More
        </u-button>
        <div v-else>Wait, more button loading...</div>
    </div>
</template>

<script lang="ts" setup>
import UsersService from '@/services/users.service';
import CookieUtil from '@/utils/cookie'
import { Cookie, Page, LoadingStatus } from '@/constants/common'
import type { UserType } from '@/types/user.type';

definePageMeta({
    middleware: ['is-authorized'],
})

const router = useRouter()

const usersStore = useUsersStore()

const page = ref(1)

const { data, error, status, refresh } = await useAsyncData<UserType[]>('users', () => UsersService.getUsers(page.value))

usersStore.setUsers(data.value ?? [])

const isClient = computed(() => import.meta.client)
const isLoading = computed(() => status.value === LoadingStatus.penging)

const errorLoadingText = computed(() => {
    if (usersStore.users.length) return ''
    if (error.value) return 'Error loading users'

    return 'Users list is empty'
})

const handleUsersLoad = async (): Promise<void> => {
    page.value++

    await refresh()
    usersStore.addUsers(data.value ?? [])
}

const handleUserLogout = (): void => {
    CookieUtil.removeCookie(Cookie.isAuthorized)

    router.push(Page.login)
}
</script>

<style lang="scss" scoped>
.protected-page {
    width: 100%;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__cards {
        display: flex;
        justify-content: space-between;
        flex-shrink: 0;
        flex-flow: row wrap;
        row-gap: 30px;
        margin-bottom: 40px;
    }
}
</style>
