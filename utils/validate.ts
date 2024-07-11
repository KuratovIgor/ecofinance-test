import type { FormError } from '#ui/types'

type ValidateRules = {
    required?: boolean
    email?:boolean
}

const isValidateRulesType = (value: unknown): value is [unknown, ValidateRules] => {
    if (!(value instanceof Object) && !Array.isArray(value)) return false

    const typeKeys: [keyof ValidateRules | string] = ['required']

    Object.keys(value).forEach((key) => {
        if (!typeKeys.includes(key)) return false
    })

    return true
}

export default class FormValidate {
    private static errors: FormError[] = []

    public static validate<T>(fields: {[K in keyof T]?: [unknown, ValidateRules]}): FormError[] {

        for (const [key, value] of Object.entries(fields)) {
            if (!isValidateRulesType(value)) continue

            if ('required' in value[1]) this.validateRequired(key, value[0])
            if ('email' in value[1]) this.validateEmail(key, value[0])
        }

        const errors = this.errors
        this.errors = []

        return errors
    }

    private static validateRequired(key: string, value: unknown): void  {
        if (value) return

        this.errors.push({
            path: key,
            message: `${key} is required`,
        })
    }

    private static validateEmail(key: string, value: unknown): void {
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm")
        const isEmailValid = emailRegex.test(value as string)

        if (!isEmailValid) {
            this.errors.push({
                path: key,
                message: `invalid email`
            })
        }
    }
}