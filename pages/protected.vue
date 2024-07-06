<template>
    <div class="protected-page">
        <div class="protected-page__header">
            <h1>Users</h1>
            <u-button color="red" @click="handleUserLogout">Logout</u-button>
        </div>

        <div class="protected-page__cards">
            <user-card
                v-for="(user, index) of usersStore.users"
                :key="index"
                :user="user"
            />
        </div>

        <u-button
            v-if="isClient"
            :loading="usersStore.loading"
            block
            @click="handleUsersLoad"
        >
            More
        </u-button>
        <div v-else>Wait, more button loading...</div>
    </div>
</template>

<script lang="ts" setup>
import CookieUtil from '@/utils/cookie';
import { Cookie, Page } from '@/constants/common';

definePageMeta({
    middleware: ['is-authorized'],
})

const router = useRouter()

const page = ref(1)

const usersStore = useUsersStore()

const isClient = computed(() => import.meta.client)

const handleUsersLoad = async (): Promise<void> => {
    page.value++

    await usersStore.getUsers(page.value)
}

const handleUserLogout = (): void => {
    CookieUtil.removeCookie(Cookie.isAuthorized)

    router.push(Page.login)
}

await usersStore.getUsers(page.value)
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
