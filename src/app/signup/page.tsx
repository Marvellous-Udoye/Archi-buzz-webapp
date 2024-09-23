"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "../component/common/archi-button";
import Input from "../component/common/archi-input";
import styles from './form.module.css';

type validationError = {
  email?: string
  password?: string
  confirmpassword?: string
}

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [showpassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<validationError>({})
  const [errorMessage, setErrorMessage] = useState(false)
  const route = useRouter()

  useEffect(() => {
    if (password.length >= 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: undefined }))
    }
  }, [password])

  const handleEmailChange = () => {
    if (errors.email) {
      setErrors((prevErrors) => ({ prevErrors, email: undefined }))
    }
  }

  const handlePasswordChange = () => {
    if (errors.password) {
      setErrors((prevErrors) => ({ prevErrors, password: undefined }))
    }
  }

  const handleConfirmPasswordChange = () => {
    if (errors.confirmpassword) {
      setErrors((prevErrors) => ({ prevErrors, confirmpassword: undefined }))
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
      setErrorMessage(true)
    }

    if (password.length < 8) {
      valid = false
      newError.confirmpassword = ''
    }
    if (password.length >= 8 && confirmpassword != password) {
      valid = false
      newError.confirmpassword = "Check Password"
      setErrorMessage(false)
    }

    if (!valid) {
      setErrors(newError)
    } else {
      route.push('/community')
    }
  }

  return (
    <div className={`${styles.login_and_signup_ctn} min-h-[100svh] bg-cover bg-center flex justify-center items-center px-5 md:px-0 md:py-10 bg-[#DEDEDE] md:bg-transparent`}>
      <div className="flex flex-wrap justify-center w-full">
        <div className="max-w-[714px] w-full bg-[#DEDEDE] rounded-none md:rounded-tr-[20px] md:rounded-tl-[20px] lg:rounded-tl-[20px] lg:rounded-bl-none xl:rounded-tl-[20px] lg:rounded-tr-[20px] xl:rounded-bl-[20px] xl:rounded-tr-none md:pt-[49px] pb-0 md:pb-[57px]">
          <header className="flex flex-col gap-2 md:gap-4 pb-2.5 md:pb-4 text-center">
            <p className="text-[29px] sm:text-[32px] md:text-[40px] font-[400]">Welcome to <span className="text-[#FFA500]">Archi</span><span className="text-[#808080]">Buzz</span></p>
            <p className="text-[12px] md:text-[16px] font-[500]">Create your account by filling in your details below.</p>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-4 mt-[9px] md:mt-4 mx-0 md:mx-11 ">
            <fieldset>
              <label
                htmlFor="Email"
                className="leading-[24px] md:leading-[32px] text-[12px] md:text-[16px] font-[500]"
              >
                E-mail
              </label>
              <Input
                id="Email"
                type='text'
                value={email}
                autocomplete="email"
                placeholder='archibuzz@gmail.com'
                styles={`${errors.email ? 'border-[2px] border-[#FF0000]' : ''}  text-[14px] md:text-base py-3 md:py-4 pr-3 md:pr-4 pl-[50px] md:pl-[64px] rounded-[10px]`}
                handleChange={(e) => setEmail(e.target.value)}
                handleFocus={handleEmailChange}
              >
                <svg className="absolute top-1/2 left-5 -translate-y-1/2 max-w-[20px] max-h-[10px] md:max-w-full md:max-h-full" xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.5 2.30964 2.05964 1.75 2.75 1.75H18.75C19.4404 1.75 20 2.30964 20 3V13C20 13.6904 19.4404 14.25 18.75 14.25H2.75C2.05964 14.25 1.5 13.6904 1.5 13V3ZM2.75 0.25C1.23122 0.25 0 1.48122 0 3V13C0 14.5188 1.23122 15.75 2.75 15.75H18.75C20.2688 15.75 21.5 14.5188 21.5 13V3C21.5 1.48122 20.2688 0.25 18.75 0.25H2.75ZM6.1801 4.38558C5.84076 4.14804 5.37311 4.23057 5.13558 4.5699C4.89804 4.90924 4.98057 5.37689 5.3199 5.61442L10.3199 9.11442C10.5781 9.29519 10.9219 9.29519 11.1801 9.11442L16.1801 5.61442C16.5194 5.37689 16.602 4.90924 16.3644 4.5699C16.1269 4.23057 15.6592 4.14804 15.3199 4.38558L10.75 7.58451L6.1801 4.38558Z" fill="black" />
                </svg>
              </Input>
              {errors.email && <p className="ml-1 font-[500] text-[10px] md:text-[12px] text-[#FF0000]">{errors.email}</p>}
            </fieldset>

            <fieldset>
              <label
                htmlFor="Password"
                className="leading-[32px] text-[12px] md:text-[16px] font-[500]"
              >
                Password
              </label>
              <Input
                id="Password"
                type={showpassword ? "text" : "password"}
                value={password}
                placeholder='********'
                styles={`${errors.password ? 'border-[2px] border-[#FF0000]' : ''}  text-[14px] md:text-base py-3 md:py-4 pr-3 md:pr-4 pl-[50px] md:pl-[64px] rounded-[10px]`}
                handleChange={(e) => setPassword(e.target.value)}
                handleFocus={handlePasswordChange}

              >
                <svg className="absolute top-1/2 left-5 -translate-y-1/2 max-w-[20px] max-h-[12px] md:max-w-full md:max-h-full" xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                  <path d="M11 9H12.4C12.7314 9 13 9.2686 13 9.6V16.4C13 16.7314 12.7314 17 12.4 17H1.6C1.26863 17 1 16.7314 1 16.4V9.6C1 9.2686 1.26863 9 1.6 9H3M11 9V5C11 3.66667 10.2 1 7 1C3.8 1 3 3.66667 3 5V9M11 9H3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg
                  onClick={() => setShowPassword(!showpassword)}
                  className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer max-h-[10px] md:max-w-full md:max-h-full" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.93413 7.30777C5.26879 -0.102591 15.2316 -0.102591 18.5662 7.30777C18.7362 7.6855 19.1802 7.85392 19.558 7.68394C19.9357 7.51396 20.1041 7.06996 19.9341 6.69223C16.0688 -1.89741 4.43158 -1.89741 0.566244 6.69223C0.396265 7.06996 0.564681 7.51396 0.942412 7.68394C1.32014 7.85392 1.76415 7.6855 1.93413 7.30777ZM8.00019 8C8.00019 6.75731 9.0075 5.75 10.2502 5.75C11.4929 5.75 12.5002 6.75731 12.5002 8C12.5002 9.24269 11.4929 10.25 10.2502 10.25C9.0075 10.25 8.00019 9.24269 8.00019 8ZM10.2502 4.25C8.17907 4.25 6.50019 5.92889 6.50019 8C6.50019 10.0711 8.17907 11.75 10.2502 11.75C12.3213 11.75 14.0002 10.0711 14.0002 8C14.0002 5.92889 12.3213 4.25 10.2502 4.25Z" fill="black" />
                </svg>
              </Input>
              {errors.password && <p className="ml-1 font-[500] text-[10px] md:text-[12px] text-[#FF0000]">{errors.password}</p>}
            </fieldset>

            <fieldset>
              <label
                htmlFor="ConfirmPassword"
                className="leading-[32px] text-[12px] md:text-[16px] font-[500]"
              >
                Confirm Password
              </label>
              <Input
                id="ConfirmPassword"
                type={showpassword ? "text" : "password"}
                value={confirmpassword}
                placeholder='********'
                styles={`${errors.confirmpassword ? 'border-[2px] border-[#FF0000]' : ''} text-[14px] md:text-base py-3 md:py-4 pr-3 md:pr-4 pl-[50px] md:pl-[64px] rounded-[10px]`}
                handleChange={(e) => setConfirmpassword(e.target.value)}
                handleFocus={handleConfirmPasswordChange}

              >
                <svg className="absolute top-1/2 left-5 -translate-y-1/2 max-w-[20px] max-h-[12px] md:max-w-full md:max-h-full" width="14" height="18" viewBox="0 0 14 18" fill="none">
                  <path d="M11 9H12.4C12.7314 9 13 9.2686 13 9.6V16.4C13 16.7314 12.7314 17 12.4 17H1.6C1.26863 17 1 16.7314 1 16.4V9.6C1 9.2686 1.26863 9 1.6 9H3M11 9V5C11 3.66667 10.2 1 7 1C3.8 1 3 3.66667 3 5V9M11 9H3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg
                  onClick={() => setShowPassword(!showpassword)}
                  className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer max-h-[10px] md:max-w-full md:max-h-full" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.93413 7.30777C5.26879 -0.102591 15.2316 -0.102591 18.5662 7.30777C18.7362 7.6855 19.1802 7.85392 19.558 7.68394C19.9357 7.51396 20.1041 7.06996 19.9341 6.69223C16.0688 -1.89741 4.43158 -1.89741 0.566244 6.69223C0.396265 7.06996 0.564681 7.51396 0.942412 7.68394C1.32014 7.85392 1.76415 7.6855 1.93413 7.30777ZM8.00019 8C8.00019 6.75731 9.0075 5.75 10.2502 5.75C11.4929 5.75 12.5002 6.75731 12.5002 8C12.5002 9.24269 11.4929 10.25 10.2502 10.25C9.0075 10.25 8.00019 9.24269 8.00019 8ZM10.2502 4.25C8.17907 4.25 6.50019 5.92889 6.50019 8C6.50019 10.0711 8.17907 11.75 10.2502 11.75C12.3213 11.75 14.0002 10.0711 14.0002 8C14.0002 5.92889 12.3213 4.25 10.2502 4.25Z" fill="black" />
                </svg>
              </Input>
              {errors.confirmpassword && <p className="ml-1 font-[500] text-[10px] md:text-[12px] text-[#FF0000]">{errors.confirmpassword}</p>}

              <div className={`${errorMessage ? 'text-[#FF0000]' : ''} text-[10px] md:text-[12px] font-[500] mt-1`}>
                <p >The password must be 8 characters long</p>
                <p>Character can be number, letters or special characters like _,-,+</p>
              </div>
            </fieldset>

            <div className="mt-[13px]">
              <Button
                type='submit'
                styles="bg-[#FFA809] w-full py-3 px-3 md:py-4 md:px-2 rounded-[10px] text-white active:bg-[#CC8400] transition ease duration-100ms outline-none"
              >
                <svg className="max-h-[10px] md:max-w-full md:max-h-full" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <path d="M16.5833 8.58333C17.0436 8.58333 17.421 8.20928 17.375 7.75134C17.2117 6.12274 16.5712 4.57146 15.5251 3.29672C14.302 1.80639 12.6 0.786249 10.7091 0.410123C8.81817 0.0339962 6.85534 0.325155 5.15503 1.23399C3.45472 2.14282 2.12214 3.6131 1.38434 5.3943C0.646539 7.17551 0.549173 9.15743 1.10883 11.0024C1.66849 12.8473 2.85054 14.4411 4.45358 15.5122C6.05662 16.5834 7.98146 17.0655 9.90014 16.8765C11.5413 16.7149 13.091 16.0708 14.3582 15.0348C14.7144 14.7434 14.7121 14.2121 14.3866 13.8866C14.0612 13.5612 13.5363 13.566 13.1729 13.8483C12.1841 14.6164 10.9939 15.0941 9.73678 15.2179C8.20184 15.3691 6.66196 14.9834 5.37953 14.1265C4.0971 13.2696 3.15146 11.9945 2.70373 10.5186C2.256 9.04261 2.3339 7.45707 2.92414 6.03211C3.51438 4.60715 4.58044 3.43093 5.94069 2.70386C7.30094 1.97679 8.8712 1.74386 10.3839 2.04476C11.8967 2.34567 13.2583 3.16178 14.2367 4.35404C15.0381 5.33054 15.5419 6.50988 15.698 7.75214C15.7554 8.20878 16.1231 8.58333 16.5833 8.58333Z" fill="#D9D9D9" />
                </svg>
                <p className="text-[14px] md:text-base font-[500] ">Create Account</p>
              </Button>

              <p className="relative flex justify-center items-center py-[7px] md:py-4 text-[16px] md:text-[24px] font-[500]">
                <span className="absolute left-[15px] md:left-[30px] top-1/2 transform -translate-y-1/2 h-[1px] bg-black w-full max-w-[120px] md:max-w-[250px] md:mr-[26px] mr-[7px]"></span>
                OR
                <span className="absolute right-[15px] md:right-[30px] top-1/2 transform -translate-y-1/2 h-[1px] bg-black w-full max-w-[120px] md:max-w-[250px] md:ml-[26px] ml-[7px]"></span>
              </p>

              <Button
                type="button"
                styles="bg-[#FFE4B2] text-[12px] md:text-base w-full py-3 px-3 md:py-4 md:px-2 rounded-[10px] flex justify-center items-center gap-1 md:gap-8 active:bg-[#CCB68F] transition ease duration-100ms outline-none"
              >
                <p className="text-[14px] md:text-[16px] font-[500]">Create Account With Google</p>
                <svg className="w-5 h-5 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                  <path d="M40.5 20.4797C40.5 19.129 40.3666 17.7347 40.1443 16.4275H20.8945V24.1398H31.9198C31.4752 26.6234 30.0082 28.802 27.8298 30.1963L34.4094 35.2071C38.2771 31.6777 40.5 26.5362 40.5 20.4797Z" fill="#4280EF" />
                  <path d="M20.8953 40C26.4079 40 31.0314 38.2135 34.4101 35.1635L27.8305 30.1963C26.0078 31.4163 23.6516 32.1134 20.8953 32.1134C15.5604 32.1134 11.0703 28.5841 9.4254 23.8783L2.66797 28.9762C6.1356 35.7299 13.1598 40 20.8953 40Z" fill="#34A353" />
                  <path d="M9.4247 23.8348C8.58002 21.3511 8.58002 18.6497 9.4247 16.166L2.66727 11.0245C-0.222423 16.6889 -0.222423 23.3555 2.66727 28.9763L9.4247 23.8348Z" fill="#F6B704" />
                  <path d="M20.8953 7.93089C23.7849 7.88732 26.6302 8.97663 28.7197 10.9374L34.5435 5.18585C30.8536 1.78722 25.9633 -0.0428117 20.8953 0.00076046C13.1598 0.00076046 6.1356 4.27083 2.66797 11.0245L9.4254 16.166C11.0703 11.4167 15.5604 7.93089 20.8953 7.93089Z" fill="#E54335" />
                </svg>
              </Button>
            </div>

          </form>
        </div>

        <div className={`${styles.login_and_signup_blur_ctn} max-w-[714px] xl:max-w-[552px] w-full flex justify-center items-center rounded-none md:rounded-br-[20px] md:rounded-bl-[20px] lg:rounded-tr-none lg:rounded-bl-[20px] lg:rounded-br-[20px] xl:rounded-bl-none xl:rounded-tr-[20px] xl:rounded-br-[20px]`}>
          <div className="pt-[10px] md:p-[20px] xl:p-[13px] flex flex-row md:flex-col items-center justify-center gap-1.5 md:gap-4 xl:gap-8">
            <p className="text-[14px] md:text-[32px] font-[500] text-black md:text-white text-center">Already have an account?</p>
            <Link href='/login'>
              <button className="md:min-w-[332px] w-full block border-0 md:border-[2.5px] md:border-[#808080] rounded-[20px] text-[14px] md:text-[16px] font-[500] py-0 px-0 md:py-4 md:px-2 text-[#FFA500] md:text-white active:bg-transparent md:active:bg-[#CC8400] transition ease duration-100ms hover:border-[#CC8400] outline-none lg:cursor-pointer">
                Login
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div >
  );
};

export default SignUp;
