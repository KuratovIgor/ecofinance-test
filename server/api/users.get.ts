import type { H3Event, EventHandlerRequest } from 'h3'
import { UserType } from '@/types/user.type'

type Response = {
    results: {
        name: {
            title: string
            first: string
            last: string
        }
        location: {
            city: string
        }
        picture: {
            medium: string
        }
        email: string
    }[]
}

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>): Promise<UserType[]> => {
    const { page } = getQuery(event)

    try {
        const response = await $fetch<Response>(`https://randomuser.me/api/?page=${page || 1}&results=6`)

        return response.results.map((result) => ({
            fullName: `${result.name.title} ${result.name.first} ${result.name.last}`,
            avatar: result.picture.medium,
            location: result.location.city,
            email: result.email
        }))
    } catch (e) {
        throw createError({message: e as string})
    }
})
