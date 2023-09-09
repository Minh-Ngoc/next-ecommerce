'use client';

import { Metadata } from 'next'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useMemo, useState } from 'react';
import { setUserInfo } from '@/redux/slices';
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { EyeSlashFilledIcon } from '@/components/Icons';
import { EyeFilledIcon } from '@/components/Icons/EyeFilledIcon';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
    title: 'Login',
}
export default function Login() {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.user);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const validatePassword = (value: string) => value.length > 6;

    const validationState = useMemo(() => {
        if (form.password === "") return undefined;

        return validatePassword(form.password) ? "valid" : "invalid";
    }, [form.password]);
    
    const handleOnchange = (value: string, input: string) => {
        setForm(prev => ({ ...prev, [input]: value }))
    }

    useEffect(() => {
        dispatch(setUserInfo({ name: 'Minh', age: 23 }));
    }, []);

    interface UserInfo {
        name: string,
        age: number,
    }

    if(!users.userInfo) {
        const { name, age } = users.userInfo as UserInfo;
        
        return (
            <div>
                <h1>Hello {name} - {age} year old, Login Page!</h1>
            </div>
    );

    } else {
        const labelStyle: any = {
            label: 'text-xl font-medium',
            input: ['text-xl font-medium', 'placeholder:text-normal'],
            errorMessage: 'text-lg text-yellow-500'
        }
        
        return (
            <section>
                <div className="w-max select-none flex flex-col bg-black/50 items-center justify-center mb-10 px-12 py-12 mx-auto md:h-max border-solid border-2 border-indigo-600">
                    <div className="flex items-center mb-6 text-3xl font-semibold text-white uppercase tracking-widest">
                        Login
                    </div>
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <Input
                                isClearable
                                value={form.username}
                                type="text"
                                label="Username"
                                classNames={labelStyle}
                                variant="bordered"
                                color={validationState === "invalid" ? "danger" : "success"}
                                onValueChange={e => handleOnchange(e, 'username')}
                                fullWidth
                            />
                            <Input
                                value={form.password}
                                type={isVisible ? "text" : "password"}
                                label="Password"
                                classNames={labelStyle}
                                size='lg'
                                variant="bordered"
                                color={validationState === "invalid" ? "danger" : "success"}
                                errorMessage={validationState === "invalid" && "Please enter password from 6 characters!"}
                                validationState={validationState}
                                onValueChange={e => handleOnchange(e, 'password')}
                                fullWidth
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeSlashFilledIcon fill='white' className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon fill='white' className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                    </button>
                                }
                            />
                            <div className="flex items-center justify-between">
                                <Checkbox defaultSelected radius="md">
                                    <span className='text-white text-xl'>Remember me</span>
                                </Checkbox>
                                <Link isBlock href="#" color="danger" size='lg'>
                                    Forgot password?
                                </Link>
                            </div>
                            <Button type='submit' size='lg' color="default" variant="ghost" fullWidth className='text-white text-xl font-normal hover:text-danger-500'>
                                Login
                            </Button>
                            <p className="text-normal text-xl font-light text-white dark:text-gray-400">
                                Don’t have an account yet? 
                                <Link isBlock href="#" color="warning" size='lg'>
                                    Sign up?
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        ) 
    }
}