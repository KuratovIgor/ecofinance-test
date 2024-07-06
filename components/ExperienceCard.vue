<template>
    <UCard class="public-page__experience">
        <template #header>
            <div class="public-page__experience-title">{{ experience.jobTitle }}</div>
            <div>{{ experience.title }}</div>
            <div>{{ experience.dates.from }} - {{ experience.dates.to }}</div>
        </template>

        <div v-html="experience.description"></div>
    </UCard>
</template>

<script lang="ts" setup>
import type { PersonalInfoExperience } from '@/types/user.type'

defineProps<{
    experience: PersonalInfoExperience
}>()
</script>
