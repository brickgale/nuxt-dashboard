<script lang="ts" setup>
    import type { NavigationMenuItem } from '@nuxt/ui';

    const items = ref<NavigationMenuItem[]>([
        {
            label: 'Home',
            to: '/',
        },
        {
            label: 'Contact',
            to: '/contact',
        },
        {
            label: 'Login',
            to: '/login',
        },
    ]);

    const colorMode = useColorMode()

    const isDark = computed({
        get() {
            return colorMode.value === 'dark'
        },
        set() {
            colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        }
    })
</script>

<template>
    <header class="w-full flex justify-between bg-(--ui-bg)/75 backdrop-blur border-b border-(--ui-border) h-(--ui-header-height) sticky top-0">
        <div class="flex flex-row justify-between max-w-7xl w-full mx-auto p-5">
            <div class="logo flex items-center">
                <h1 class="text-xl font-bold">Nuxt Dashboard</h1>
            </div>
            <div class="flex flex-row items-center gap-4">
                <UNavigationMenu :items="items" class="flex" />
                <ClientOnly v-if="!colorMode?.forced">
                    <UButton
                        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
                        color="neutral"
                        variant="ghost"
                        @click="isDark = !isDark"
                        />

                    <template #fallback>
                        <div class="size-8" />
                    </template>
                </ClientOnly>
            </div>
            

        </div>
    </header>
</template>