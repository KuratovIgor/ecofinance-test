<template>
    <UCard class="experience-card">
        <template #header>
            <div class="experience-card__title">{{ experience.jobTitle }}</div>
            <div>{{ experience.title }}</div>
            <div class="experience-card__info">{{ experience.dates.from }} - {{ experience.dates.to }}</div>
        </template>

        <div v-html="experience.description"></div>
    </UCard>
</template>

<script lang="ts" setup>
import type { PersonalInfoExperienceType } from '@/types/user.type'

defineProps<{
    experience: PersonalInfoExperienceType
}>()
</script>

<style lang="scss" scoped>
.experience-card {
    margin-bottom: 20px;
    width: 100%;
    max-width: 800px;
    font-size: 14px;

    &__title {
        margin-bottom: 10px;
        font-size: 20px;
    }

    &__info {
        color: $color-info;
    }
}
</style>
