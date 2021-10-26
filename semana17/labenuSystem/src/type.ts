export type student = {
    id: string,
    name: string,
    email: string,
    birthDate: string,
    hobbies: string
}

export type teacher = {
    id: string,
    name: string,
    email: string,
    birthDate: string,
    specialty: string
}

export type cohort = {
    id: number,
    name: string,
    startDate: string,
    endDate: string,
    teacherList_id: Array<any>,
    studentList_id: Array<any>,
    currentModule: number
}