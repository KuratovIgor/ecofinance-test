<template>
    <div class="default-layout">
        <u-verticalNavigation class="default-layout__sidebar" :links="links" />
        <u-divider orientation="vertical" />


        <div class="default-layout__page">
            <nuxt-page />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Page } from '@/constants/common'

const links = [
    {
        label: 'Login',
        to: Page.login,
    },
    {
        label: 'Public',
        to: Page.public,
    },
    {
        label: 'Protected',
        to: Page.protected,
    },
]
</script>

<style lang="scss" scoped>
.default-layout {
    display: flex;

    &__sidebar {
        width: 100%;
        max-width: 250px;
    } 

    &__page {
        height: 100vh;
        max-width: 800px;
        margin: 0 auto;   
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>
