interface Lesson {
    title: string
    description: string
}

interface TitleModule {
    title: string
    description: string
}

export interface Topics {
    title: TitleModule[]
    description: Lesson[]
}