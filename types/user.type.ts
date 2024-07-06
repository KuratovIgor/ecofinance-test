export type LoginUserType = {
    email: string
    password: string
}

export type PersonalInfoType = {
    title: string
    name: string
    age: number
    telegram: string
    email: string
    experience: PersonalInfoExperienceType[]
    stack: string[]
}

export type PersonalInfoExperienceType = {
    title: string
    dates: {
        from: string
        to: string
    }
    jobTitle: string
    description: string
}

export type UserType = {
    avatar: string
    fullName: string
    email: string
    location: string
}
