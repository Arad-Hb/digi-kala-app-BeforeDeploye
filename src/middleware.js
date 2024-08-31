import { NextResponse } from "next/server"


export default function middleware(request){
    if (request.nextUrl.pathname.startsWith('/user/dashboard')){
        if(request.cookies.get('jwt') === undefined){
            return NextResponse.redirect(`${request.nextUrl.origin}/user`)
        }
    }
    if (request.nextUrl.pathname.startsWith('/admin')){
        if(request.cookies.get('admin') === undefined){
            return NextResponse.redirect(new URL('/landing', request.url))
        }
    }
}