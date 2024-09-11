"use client"

import React, { useEffect, useState } from "react";
import Input from "../component/common/archi-input";
import Button from "../component/common/archi-button";
import styles from '../signup/form.module.css';
import Link from "next/link";

type validationError = {
  email?: string
  password?: string
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showpassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<validationError>({})

  useEffect(() => {
    if (password.length >= 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: undefined }))
    }
  }, [password])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errors.email) {
      setErrors((prevErrors) => ({ prevErrors, email: undefined }))
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errors.password) {
      setErrors((prevErrors) => ({ prevErrors, password: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setErrors({});

    let valid = true
    const newError: validationError = {}

    if (!email) {
      valid = false
      newError.email = "Enter your email"
    } else if (!email.endsWith('@gmail.com')) {
      valid = false
      newError.email = "Invalid email!"
    }

    if (password.length < 1) {
      valid = false
      newError.password = "Enter Password"
    }

    if (password.length > 0 && password.length < 8) {
      valid = false
      newError.password = "Wrong Password"
    }

    if (!valid) {
      setErrors(newError)
    } else {

    }
  }

  return (
    <div className={`${styles.signup_page} min-h-screen bg-cover bg-center flex justify-center items-center py-10`}>
      <div className={`${styles.signup_ctn} flex justify-center w-full`}>
        <div className={`${styles.signup_card} max-w-[714px] w-full bg-[#DEDEDE] rounded-tl-[20px] rounded-bl-[20px] pt-[49px] pb-[57px]`}>
          <header className={`${styles.header} flex flex-col gap-4 pb-4 text-center`}>
            <p className="text-[40px] font-[400]">Login</p>
            <p className="text-[16px] font-[500]">Login to your account by filling in your details below.</p>
          </header>

          <form onSubmit={handleSubmit} className={`${styles.form} flex flex-col gap-4 mt-4 mx-11`}>
            <fieldset>
              <label
                htmlFor="Email"
                className="leading-[32px] text-[16px] font-[500]"
              >
                E-mail
              </label>
              <Input
                id="Email"
                type='text'
                value={email}
                autocomplete="email"
                placeholder='John Doe'
                styles={`${errors.email ? styles['invalid'] : ''}`}
                handleChange={(e) => setEmail(e.target.value)}
                handleFocus={handleEmailChange}
              >
                <svg className="absolute top-1/2 left-5 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.5 2.30964 2.05964 1.75 2.75 1.75H18.75C19.4404 1.75 20 2.30964 20 3V13C20 13.6904 19.4404 14.25 18.75 14.25H2.75C2.05964 14.25 1.5 13.6904 1.5 13V3ZM2.75 0.25C1.23122 0.25 0 1.48122 0 3V13C0 14.5188 1.23122 15.75 2.75 15.75H18.75C20.2688 15.75 21.5 14.5188 21.5 13V3C21.5 1.48122 20.2688 0.25 18.75 0.25H2.75ZM6.1801 4.38558C5.84076 4.14804 5.37311 4.23057 5.13558 4.5699C4.89804 4.90924 4.98057 5.37689 5.3199 5.61442L10.3199 9.11442C10.5781 9.29519 10.9219 9.29519 11.1801 9.11442L16.1801 5.61442C16.5194 5.37689 16.602 4.90924 16.3644 4.5699C16.1269 4.23057 15.6592 4.14804 15.3199 4.38558L10.75 7.58451L6.1801 4.38558Z" fill="black" />
                </svg>
              </Input>
              {errors.email && <p className="ml-1 font-[500] text-[12px] text-[#FF0000]">{errors.email}</p>}
            </fieldset>

            <fieldset>
              <label
                htmlFor="Password"
                className="leading-[32px] text-[16px] font-[500]"
              >
                Password
              </label>
              <Input
                id="Password"
                type={showpassword ? "text" : "password"}
                value={password}
                placeholder='.........'
                styles={`${errors.password ? styles['invalid'] : ''}`}
                handleChange={(e) => setPassword(e.target.value)}
                handleFocus={handlePasswordChange}

              >
                <svg className="absolute top-1/2 left-5 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                  <path d="M11 9H12.4C12.7314 9 13 9.2686 13 9.6V16.4C13 16.7314 12.7314 17 12.4 17H1.6C1.26863 17 1 16.7314 1 16.4V9.6C1 9.2686 1.26863 9 1.6 9H3M11 9V5C11 3.66667 10.2 1 7 1C3.8 1 3 3.66667 3 5V9M11 9H3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg
                  onClick={() => setShowPassword(!showpassword)}
                  className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.93413 7.30777C5.26879 -0.102591 15.2316 -0.102591 18.5662 7.30777C18.7362 7.6855 19.1802 7.85392 19.558 7.68394C19.9357 7.51396 20.1041 7.06996 19.9341 6.69223C16.0688 -1.89741 4.43158 -1.89741 0.566244 6.69223C0.396265 7.06996 0.564681 7.51396 0.942412 7.68394C1.32014 7.85392 1.76415 7.6855 1.93413 7.30777ZM8.00019 8C8.00019 6.75731 9.0075 5.75 10.2502 5.75C11.4929 5.75 12.5002 6.75731 12.5002 8C12.5002 9.24269 11.4929 10.25 10.2502 10.25C9.0075 10.25 8.00019 9.24269 8.00019 8ZM10.2502 4.25C8.17907 4.25 6.50019 5.92889 6.50019 8C6.50019 10.0711 8.17907 11.75 10.2502 11.75C12.3213 11.75 14.0002 10.0711 14.0002 8C14.0002 5.92889 12.3213 4.25 10.2502 4.25Z" fill="black" />
                </svg>
              </Input>
              {errors.password && <p className="ml-1 font-[500] text-[12px] text-[#FF0000]">{errors.password}</p>}
            </fieldset>

            <div className="mt-[13px]">
              <Button
                type='submit'
                styles="bg-[#FFA809] text-[16px] font-[500] w-full py-4 px-2 rounded-[20px] text-white hover:bg-[#CC8400] transition ease duration-100ms outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <path d="M16.5833 8.58333C17.0436 8.58333 17.421 8.20928 17.375 7.75134C17.2117 6.12274 16.5712 4.57146 15.5251 3.29672C14.302 1.80639 12.6 0.786249 10.7091 0.410123C8.81817 0.0339962 6.85534 0.325155 5.15503 1.23399C3.45472 2.14282 2.12214 3.6131 1.38434 5.3943C0.646539 7.17551 0.549173 9.15743 1.10883 11.0024C1.66849 12.8473 2.85054 14.4411 4.45358 15.5122C6.05662 16.5834 7.98146 17.0655 9.90014 16.8765C11.5413 16.7149 13.091 16.0708 14.3582 15.0348C14.7144 14.7434 14.7121 14.2121 14.3866 13.8866C14.0612 13.5612 13.5363 13.566 13.1729 13.8483C12.1841 14.6164 10.9939 15.0941 9.73678 15.2179C8.20184 15.3691 6.66196 14.9834 5.37953 14.1265C4.0971 13.2696 3.15146 11.9945 2.70373 10.5186C2.256 9.04261 2.3339 7.45707 2.92414 6.03211C3.51438 4.60715 4.58044 3.43093 5.94069 2.70386C7.30094 1.97679 8.8712 1.74386 10.3839 2.04476C11.8967 2.34567 13.2583 3.16178 14.2367 4.35404C15.0381 5.33054 15.5419 6.50988 15.698 7.75214C15.7554 8.20878 16.1231 8.58333 16.5833 8.58333Z" fill="#D9D9D9" />
                </svg>
                Login
              </Button>
              <p className={`${styles.forget_password} flex justify-end items-center mt-[6px] text-[16px] font-[500] leading-[32px] cursor-pointer`}>Forgot Password?</p>
            </div>

          </form>
        </div>

        <div className={`${styles.login_card} max-w-[552px] w-full flex justify-center items-center rounded-tr-[20px] rounded-br-[20px]`}>
          <div className="p-[13px] flex flex-col items-center justify-center gap-8">
            <p className="text-[32px] font-[500] text-white text-center">Don&apos;t have an account?</p>
            <Link href='/signup'>
              <button className="w-full border-[2.5px] border-[#808080] rounded-[20px] text-[16px] font-[500] py-4 px-2 rounded-[20px] text-white hover:bg-[#CC8400] transition ease duration-100ms hover:border-[#CC8400] outline-none">
                Create Account
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;