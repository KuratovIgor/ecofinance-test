<template>
    <div class="login-page">
        <UCard class="login-page__card">
            <template #header>
                <h1 class="text-center">Login</h1>
            </template>

            <UForm :validate="formValidate" :state="formState">
                <UFormGroup class="mb-5" label="Email" :name="FormField.email">
                    <UInput v-model="formState.email" placeholder="email" />
                </UFormGroup>

                <UFormGroup class="mb-10" label="Password" :name="FormField.password">
                    <UInput v-model="formState.password" placeholder="password" />
                </UFormGroup>

                <UButton type="submit" block>Login</UButton>
            </UForm>
        </UCard>
    </div>
</template>

<script lang="ts" setup>
import type { FormError } from '#ui/types'
import FormValidate from '@/utils/validate';
import type { LoginUserType } from '@/types/user.type'

enum FormField {
    email = 'email',
    password = 'password',
}

const router = useRouter()

const formState = reactive<LoginUserType>({
    email: '',
    password: '',
})

const formValidate = (state: LoginUserType): FormError[] => {
    return FormValidate.validate<typeof FormField>({
        email: [state.email, { required: true }],
        password: [state.password, { required: true }],
    })
}
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;

    &__card {
        position: absolute;
        width: 100%;
        max-width: 600px;
        top: 10%;
    }
}
</style>
