'use client'
import styles from './LoginSignupForm.module.css'
import UsersErrorMessage from './UsersErrorMessage'
import { Formik } from 'formik'
import { ErrorMessage, Field, Form} from 'formik'
import React, { useEffect, useState } from 'react'
import { validationSchema } from '@/repository/validationSchema'
import { FormFields } from '@/repository/FormFields'
import { postData } from '@/serverActions/postData'
import Cookies from "js-cookie"
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setUserData } from '@/redux/features/slices/UsersSlice'
import { revalidate } from '@/serverActions/revalidator'


const LoginSignupForm = ({showSignup}) => {

  const router=useRouter()
  const dispatch=useDispatch()

  const[signupForm,setSignupForm]=useState()
  const[formName,setFormName]=useState()

  useEffect(()=>{
    if(showSignup){
      setFormName('signup')
    }
    else{
      setFormName('login')
    }
    setSignupForm(showSignup)
  },[showSignup])

  const ValidationSchema=validationSchema(formName)
  const formFields=FormFields(formName)

  const submitHandler=(values)=>{

    const Username=values.username
    const Password=values.password
    const Data={username:Username,password:Password}
    const firstRequest=JSON.stringify(values)
    const secondRequest=JSON.stringify(Data)

    if(formName==='signup'){
        postData("users/register",secondRequest)
        .then(response => {
            if (response.id === 0) {
                alert("نام کاربری یا رمز عبور تکراریست!!!!!!")
                return router.push('/user')
            }
            else {
                postData("users/login", secondRequest)
                    .then(loginResponse => {
                        alert("ثبت نام با موفقیت انجام شد.")
                        Cookies.set('jwt',loginResponse.token)
                        dispatch(setUserData(values))
                        return router.push('/user/dashboard')
                    })
            }
        })
        .catch(error => {
            console.log(error)
        })
            
    }
    else{
      postData("users/login",secondRequest )
            .then(response => {
                if (response.hasOwnProperty("token")) {
                  Cookies.set('jwt',response.token)
                  revalidate("topBanner")
                  return router.push('/user/dashboard')
                }
                else {
                    alert("نام کاربری یا کلمه عبور صحیح نمی باشد!!!!")
                }
            })
            .catch(error => {
                console.log(error)
            })     
    }
  }


  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.header}`}>
        <span className={`${styles.title}`}>{signupForm?<h2>ثبت نام</h2>:<h2>ورود</h2>}</span>
      </div>
      <div className={`${styles.main}`}>
        <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={ValidationSchema} validateOnChange={false} validateOnBlur={false}>
            <Form className={`${styles.form}`}>
                <div className={`${styles.fieldsContainer}`}>
                {signupForm && <>
                    <Field className={`${styles.field}`} type="text" name="name" placeholder="نام" />
                    <ErrorMessage name="name" component={UsersErrorMessage} />
                    <Field className={`${styles.field}`} type="text" name="lastname" placeholder="نام خانوادگی" />
                    <ErrorMessage name="lastname" component={UsersErrorMessage} />
                    <Field className={`${styles.field}`} type="text" name="mobileNumber" placeholder="شماره موبایل" />
                    <ErrorMessage name="mobileNumber" component={UsersErrorMessage} />
                    </>}
                    <Field className={`${styles.field}`} type="text" name="username" placeholder="نام کاربری" />
                    <ErrorMessage name="username" component={UsersErrorMessage} />
                    <Field className={`${styles.field}`} type="password" name="password" placeholder="رمز عبور" />
                    <ErrorMessage name="password" component={UsersErrorMessage} />
                    <button type='submit' className={`${styles.button}`}>{signupForm?<span className={`${styles.signupText}`}>ثبت نام</span>:<span className={`${styles.loginText}`}>ورود</span>}</button>
                </div>
            </Form>
        </Formik>
      </div>
      <div className={`${styles.footer}`}>
        <span className={`${styles.footerText}`}>ورود شما به معنای پذیرش شرایط دیجی کالا و قوانین حریم خصوصی است</span>
      </div>
    </div>
    
  )
}

export default LoginSignupForm