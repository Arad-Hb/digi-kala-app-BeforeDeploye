'use client'
import React from 'react'
import styles from './AdminLogInForm.module.css'
import { Formik } from 'formik'
import { ErrorMessage, Field, Form} from 'formik'
import UsersErrorMessage from '../authuntication/UsersErrorMessage'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setAdminIsLogedIn } from '@/redux/features/slices/AdminSlice'

const AdminLogInForm = () => {
    const router=useRouter()
    const dispatch=useDispatch()
    const ValidationSchema=Yup.object({
        username: Yup.string().required('لطفا نام کاربری را وارد نمایید'),
        password: Yup.string().required('لطفا رمز ورود را وارد نمایید')
    })
    const formFields={
        username:'',
        password:''
    }
    const submitHandler=(values)=>{
        const Username=values.username
        const Password=values.password
        if(Username==='arad' && Password==='1234'){
            dispatch(setAdminIsLogedIn(values))
            router.push('/admin')
        }
        else{
            alert('uncorrect username or password')
        }
        
    }
  return (
    <div className={`${styles.container}`}>
        <h3>دسترسی به پنل مدیریت</h3>
        <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={ValidationSchema} validateOnChange={false} validateOnBlur={false}>
            <Form className={`${styles.form}`}>
                <div className={`${styles.fieldsContainer}`}>
                    <label htmlFor="username" className={`${styles.label}`}>نام کاربری خود را وارد کنید:</label>
                    <Field className={`${styles.field}`} type="text" name="username" placeholder="arad" />
                    <ErrorMessage name="username" component={UsersErrorMessage} />
                    <label htmlFor="password" className={`${styles.label}`}> رمز ورود را وارد کنید:</label>
                    <Field className={`${styles.field}`} type="password" name="password" placeholder="1234" />
                    <ErrorMessage name="password" component={UsersErrorMessage} />
                    <button type='submit' className={`${styles.button}`}>ورود</button>
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default AdminLogInForm