'use client'
import React from 'react'
import styles from './UserForm.module.css'
import { BsInfoCircle } from "react-icons/bs";
import { Formik } from 'formik'
import { ErrorMessage, Field, Form} from 'formik'
import UsersErrorMessage from '../authuntication/UsersErrorMessage'
import * as Yup from 'yup'
import NavLink from '../features/NavLink';

const UserForm = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const emailRegExp= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const ValidationSchema=Yup.object({
        name: Yup.string().required('لطفا نام خود را وارد نمایید'),
        email: Yup.string().required('لطفا آدرس ایمیل خود را وارد کنید').matches(emailRegExp, 'ایمیل وارد شده صحیح نمی باشد'),
        mobileNumber: Yup.string().required('شماره موبایل خود را وارد نمایید').matches(phoneRegExp, 'شماره موبایل وارد شده صحیح نمی باشد'),
        subject: Yup.string(),
        order: Yup.string().required('لطفا کد سفارش خود را وارد نمایید'),
        message: Yup.string()
    })
    const formFields={
        name:'',
        email:'',
        mobileNumber:'',
        subject: '',
        order: '',
        message:''
    }
    const submitHandler=(values)=>{
        const name=values.name
        const messageToShow=`${name} عزیز پیام شما ثبت شد و در اولین فرصت به آن رسیدگی خواهد شد.`
        alert(messageToShow)
    }
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.header}`}>
            <div className={`${styles.title}`}>تماس با دیجی‌کالا</div>
            <div className={`${styles.commonQuestions}`}>
                <div className={`${styles.commonQuestionsText}`}>لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتداپرسش‌‌های متداول را مشاهده کنید.</div>
                <NavLink url={'/contactUs'}><div className={`${styles.commonQuestionsButton}`}>پرسش‌‌های متداول</div></NavLink>
            </div>
        </div>
        <div className={`${styles.main}`}>
        <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={ValidationSchema} validateOnChange={false} validateOnBlur={false}>
            <Form className={`${styles.form}`}>
                <div className={`${styles.fieldsContainer}`}>
                    <label htmlFor="name" className={`${styles.label}`}>نام و نام خانوادگی خود را وارد کنید:</label>
                    <Field className={`${styles.field}`} type="text" name="name" />
                    <ErrorMessage name="name" component={UsersErrorMessage} />
                    <label htmlFor="email" className={`${styles.label}`}>آدرس ایمیل خود را وارد کنید:</label>
                    <Field className={`${styles.field}`} type="text" name="email" />
                    <ErrorMessage name="email" component={UsersErrorMessage} />
                    <label htmlFor="mobileNumber" className={`${styles.label}`}>شماره موبایل خود را وارد کنید:</label>
                    <Field className={`${styles.field}`} type="text" name="mobileNumber"/>
                    <ErrorMessage name="mobileNumber" component={UsersErrorMessage} />
                    <label htmlFor="subject" className={`${styles.label}`}>موضوع پرسش خود را وارد کنید:</label>
                    <Field className={`${styles.field}`} type="text" name="subject"/>
                    <ErrorMessage name="subject" component={UsersErrorMessage} />
                    <label htmlFor="order" className={`${styles.label}`}>شماره سفارش خود را وارد کنید:</label>
                    <Field className={`${styles.field}`} type="text" name="order" />
                    <ErrorMessage name="order" component={UsersErrorMessage} />
                    <label htmlFor="message" className={`${styles.label}`}>متن پیام خود را بنویسید:</label>
                    <Field className={`${styles.messageField}`} type="text" name="message" />
                    <ErrorMessage name="message" component={UsersErrorMessage} />
                    <button type='submit' className={`${styles.button}`}>ثبت و ارسال</button>
                </div>
            </Form>
        </Formik>
        </div>
        <div className={`${styles.footer}`}>
            <div className={`${styles.infoIcon}`}><BsInfoCircle /></div>
            <div className={`${styles.infoText}`}>
            توجه داشته باشید که 300061930000، 100061930000 و 50003101 تنها شماره‌هایی هستند که دیجی‌کالا از طریق آن برای کاربران و مشتریان خود پیامک (اس ام اس) ارسال می‌کند. بنابراین ارسال هرگونه پیامک تحت عنوان دیجی‌کالا، با هر شماره دیگری تخلف و سوء استفاده از نام دیجی‌کالا است. در صورت دریافت چنین پیامکی، لطفاً جهت پیگیری قانونی آن را به info@digikala.com اطلاع دهید. قابل ذکر است که این شماره‌ها تنها سامانه ارسال پیامک هستند و وضعیت پردازش سفارشات مشتریان، رویدادها، خدمات و سرویس‌های ویژه دیجی‌کالا را به اطلاع کاربران می‌رسانند. لطفاً توجه داشته باشید که امکان دریافت و رسیدگی به پیام‌های شما از طریق این شماره‌ها وجود ندارد.
            </div>
        </div>
    </div>
  )
}

export default UserForm