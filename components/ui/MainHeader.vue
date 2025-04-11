<script lang="ts" setup>
    import type { NavigationMenuItem } from '@nuxt/ui';

    const items = ref<NavigationMenuItem[]>([
        {
            label: 'Home',
            to: '/',
        },
        {
            label: 'About',
            to: '/about',
        },
        {
            label: 'Contact',
            to: '/contact',
        },
    ]);
</script>

<template>
    <header class="w-full flex justify-between">
        <div class="flex flex-row justify-between max-w-7xl w-full mx-auto">
            <div class="logo flex items-center">
                <h1 class="text-xl font-bold">Nust Dashboard</h1>
            </div>
            <UNavigationMenu :items="items" class="flex gap-4" />
        </div>
    </header>
</template>