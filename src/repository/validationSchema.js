'use client'
import * as Yup from 'yup'

export const validationSchema=(formName)=>{
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const signupValidation=Yup.object({
        name: Yup.string().required('لطفا نام خود را وارد نمایید'),
        lastname: Yup.string().required('لطفا نام خانوادگی خود را وارد نمایید'),
        mobileNumber: Yup.string().required('شماره موبایل خود را وارد نمایید').matches(phoneRegExp, 'شماره موبایل وارد شده صحیح نمی باشد'),
        username: Yup.string().required(' لطفا نام کاربری خود را وارد نمایید'),
        password: Yup.string().required("رمز عبور را وارد نمایید")
    })
    const loginValidation=Yup.object({
        username: Yup.string().required(' لطفا نام کاربری خود را وارد نمایید'),
        password: Yup.string().required("رمز عبور را وارد نمایید")
    })
    if(formName==='signup'){
        return signupValidation
    }
    else{
        return loginValidation
    }
}