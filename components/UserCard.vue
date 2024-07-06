<template>
    <u-card class="user-card">
        <template #header>
            <div class="user-card__header">
                <div class="user-card__name">{{ user.fullName }}</div>
                <UAvatar :src="user.avatar" />
            </div>
        </template>

        <div>Email: {{ user.email }}</div>
        <div>City: {{ user.location }}</div>
    </u-card>
</template>

<script lang="ts" setup>
import type { UserType } from '@/types/user.type';

defineProps<{
    user: UserType
}>()
</script>

<style lang="scss" scoped>
.user-card {
    width: 100%;
    max-width: 370px;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__name {
        font-size: 20px;
    }
}
</style>
