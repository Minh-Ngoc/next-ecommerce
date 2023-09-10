import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import { HeartFilledIcon, ShoppingCart, SearchIcon } from "../Icons";

interface Item {
    title?: any,
    icon?: any,
    href?: any,
};

const token = '12345';
const user = {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    name: "Ngoc Minh",
    email: "ngocminh@gmail.com"
};


export default function Profile() { 
    const router = useRouter();

    return (
        <Dropdown 
            radius="lg"
            type="listbox"
            classNames={{
                base: "px-3 py-2 border-small border-divider bg-background",
                arrow: "bg-default-200",
            }}
        >
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src={user?.avatar}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" color="primary">
                <DropdownItem 
                    key="profile" 
                    className="h-14 gap-2"
                    onClick={() => router.push('/profile')}
                >
                    <p className="font-semibold text-xl"> {user?.name} </p>
                    <p className="font-semibold"> {user?.email} </p>
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}; 

export const navbarItems: Item[] = [
    { title: "Home", icon: "", href: "/" },
    { title: "Shop", icon: "", href: "/shop" },
    { title: "Blog", icon: "", href: "/blog" },
    { title: "Contact Us", icon: "", href: "/contact-us" },
    { title: "Search", icon: <SearchIcon width="30px" height="30px" />, href: "/search" },
];

export const subNavItem: Item[] = 
    token ? [
        { 
            title:  <Profile />, 
        },
        { 
            icon: <HeartFilledIcon size={34} />, 
            href: "/favourite" 
        },
        { 
            title: "0.00 $", 
            icon: <ShoppingCart size={30} />, 
            href: "/cart" 
        },
    ] : [
        { 
            title:  "Login", 
            href: "/login" 
        },
        { 
            title: "Register", 
            href: "/register" 
        },
        { 
            icon: <HeartFilledIcon size={34} />, 
            href: "/favourite" 
        },
        { 
            title: "0.00 $", 
            icon: <ShoppingCart size={30} />, 
            href: "/cart" 
        },
    ]
    
    