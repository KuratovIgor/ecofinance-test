import CookieUtil from '@/utils/cookie'
import { Cookie } from '@/constants/common'

export default defineNuxtRouteMiddleware(() => {
    const isAuthorized = CookieUtil.getCookie(Cookie.isAuthorized)

    if (!isAuthorized) {
        return navigateTo('/')
    }
})