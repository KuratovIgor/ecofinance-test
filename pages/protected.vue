<template>
    <div class="protected-page">
        <div class="protected-page__header">
            <h1>Users</h1>
            <UButton color="red">Logout</UButton>
        </div>

        <div class="protected-page__cards">
            <UserCard
                v-for="(user, index) of usersStore.users"
                :key="index"
                :user="user"
            />
        </div>

        <UButton block @click="handleGetMoreUsers">More</UButton>
    </div>
</template>

<script lang="ts" setup>
const page = ref(1)

const usersStore = useUsersStore()

const handleGetMoreUsers = async (): Promise<void> => {
    page.value++

    await usersStore.getUsers(page.value)
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
