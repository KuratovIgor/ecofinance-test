<template>
    <div class="login-page">
        <u-card class="login-page__card">
            <template #header>
                <h1 class="text-center">Login</h1>
            </template>

            <u-form :validate="formValidate" :state="formState">
                <u-form-group class="mb-5" label="Email" :name="FormField.email">
                    <u-input v-model="formState.email" placeholder="email" />
                </u-form-group>

                <u-form-group class="mb-10" label="Password" :name="FormField.password">
                    <UInput v-model="formState.password" placeholder="password" />
                </u-form-group>

                <u-button type="submit" block>Login</u-button>
            </u-form>
        </u-card>
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
