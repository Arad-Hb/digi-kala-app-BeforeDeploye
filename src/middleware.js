import { NextResponse } from "next/server"

export const config = {
    matcher:['/user/dashboard']
}
export default function middleware(request){

    if(request.cookies.get('jwt') === undefined){
        return NextResponse.redirect(`${request.nextUrl.origin}/user`)
    }

}