'use client';

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from 'react';
import { setUserInfo } from '@/redux/slices';
import { useTheme } from "next-themes";
import { Button } from '@nextui-org/react';

export default function Products() {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.user);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        dispatch(setUserInfo({ name: 'Minh', age: 23 }));
    }, []);

    interface UserInfo {
        name: string,
        age: number,
    }

    if(users.userInfo) {
        const { name, age } = users.userInfo as UserInfo;
        
        return (
            <div>
                <h1>Hello {name} - {age} year old, Products Page!</h1>
                <Button color="primary" variant="shadow" onClick={() => setTheme('light')}>Light Mode</Button>
                <Button color="primary" variant="shadow" onClick={() => setTheme('dark')}>Dark Mode</Button>
            </div>
    );

    } else {
        return <h1>Hello, Products Page!</h1>
    }
}