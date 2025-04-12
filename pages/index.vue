<script setup lang="ts">
    useSeoMeta({
        title: 'Nuxt Starter Dashboard',
    })

    definePageMeta({
        name: 'Dashboard',
        layout: 'default',
    })
</script>

<template>  
    <NuxtLayout name="default">
        <div class="w-full flex items-center justify-center p-20 flex-col">
            <h1 class="text-4xl font-bold">Welcome to <span class="text-(--ui-primary)">Nuxt 3 Dashboard</span></h1>
            <h2 class="text-3xl font-bold mt-2">Made with <span class="text-(--ui-primary)">Vue UI Library</span></h2>
        </div>
    </NuxtLayout>
</template>