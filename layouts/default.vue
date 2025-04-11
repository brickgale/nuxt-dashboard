<script lang="ts" setup>
    import UiMainHeader from '~/components/ui/MainHeader.vue';
</script>

<template>
    <div class="default-layout relative w-full">
        <NuxtLoadingIndicator />
        <UiMainHeader />
        <main class="w-full flex-col">
            <div class="max-w-7xl w-full mx-auto">
                <slot />
            </div>
        </main>
    </div>
</template>