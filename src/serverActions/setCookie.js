'use server'

import { cookies } from "next/headers"

export async function setCookie(jwt){
    const cookieStore = cookies()
    cookieStore.set({name: 'jwt',value: {jwt}})
}