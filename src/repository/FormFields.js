'use client'

export const FormFields=(formName)=>{

    const signupForm={
        name:'',
        lastname:'',
        mobileNumber:'',
        username: '',
        password: ''
    }
    const loginForm={
        username: '',
        password: ''
    }
    if(formName==='signup'){
        return signupForm
    }
    else{
        return loginForm
    }
}