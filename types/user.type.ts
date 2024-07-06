export type LoginUserType = {
    email: string
    password: string
}

export type PersonalInfo = {
    title: string
    name: string
    age: number
    telegram: string
    email: string
    experience: PersonalInfoExperience[]
    stack: string[]
}

export type PersonalInfoExperience = {
    title: string
    dates: {
        from: string
        to: string
    }
    jobTitle: string
    description: string
}
