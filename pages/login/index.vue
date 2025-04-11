<script setup lang="ts">
    import * as v from 'valibot'
    import type { FormSubmitEvent } from '@nuxt/ui'

    definePageMeta({
        layout: 'default',
    })

    const schema = v.object({
        email: v.pipe(v.string(), v.email('Invalid email')),
        password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
    })

    type Schema = v.InferOutput<typeof schema>

    const state = reactive({
        email: '',
        password: ''
    })

    const toast = useToast()
    async function onSubmit(event: FormSubmitEvent<Schema>) {
        toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
        console.log(event.data)
    }
</script>

<template>  
    <div>
        <NuxtLayout name="default">
            <div class="flex flex-col items-center justify-center p-20">
                <UCard class="w-md">
                    <template #header>
                        <h1 class="text-xl font-bold">Dashboard Login</h1>
                    </template>
                    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                        <UFormField label="Email" name="email">
                            <UInput v-model="state.email" class="w-full" />
                        </UFormField>

                        <UFormField label="Password" name="password">
                            <UInput v-model="state.password" type="password" class="w-full" />
                        </UFormField>

                        <UButton type="submit" size="lg" block>
                            Submit
                        </UButton>
                    </UForm>
                </UCard>
            </div>
        </NuxtLayout>
    </div>
</template>