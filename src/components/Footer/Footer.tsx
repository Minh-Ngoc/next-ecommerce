import Logo from "../Logo";
import FaceBook from '@/assets/imgs/icons/facebook.svg';
import Instagram from '@/assets/imgs/icons/instagram.svg';
import Twitter from '@/assets/imgs/icons/twitter.svg';
import { Button, Input, Link } from "@nextui-org/react";
export default function Footer() {
    const labelStyle: any = {
        label: "text-xl font-medium text-gray-400",
        input: ["text-xl font-medium text-gray-400", "placeholder:text-normal"],
        errorMessage: "text-lg text-yellow-500",
    };

    const features: any = [ 
        {
            title: 'Men',
            href: '/men'
        },
        {
            title: 'Women',
            href: '/woment'
        },
        {
            title: 'Boys',
            href: '/boys'
        },
        {
            title: 'Girls',
            href: '/girls'
        },
        {
            title: 'New Arrivals',
            href: '/new-arrivals'
        },
        {
            title: 'Shoes',
            href: '/shoes'
        },
        {
            title: 'Cothes',
            href: '/cothes'
        },
        {
            title: 'Accessories',
            href: '/accessories'
        },
 
    ];
    const menus: any = [
        {
            title: 'About Us',
            href: '/about'
        },
        {
            title: 'Contact Us',
            href: '/contact'
        },
        {
            title: 'My Account',
            href: '/account'
        },
        {
            title: 'Orders History',
            href: '/orders'
        },
        {
            title: 'Blog',
            href: '/blog'
        },
    ];
    const contacts: any = [
        {
            title: 'Address',
            value: '135 Hai Ba Trung, 1 District, HCMC'
        },
        {
            title: 'Phone',
            value: '(123) 456-789'
        },
        {
            title: 'Email',
            value: 'ngocminh@gmail.com'
        },
        {
            title: 'Working Days/Hours',
            value: 'Mon - Sun / 9:00AM - 8PM'
        }
    ];
    const follows: any = [
        {
            title: 'Facebook',
            icon: <FaceBook />
        },
        {
            title: 'Instagram',
            icon: <Instagram />
        },
        {
            title: 'Twitter',
            icon: <Twitter />
        }          

    ];
    const join: any = [
        {
            title: 'Subscribe to our newsletters',
            sendMsg: () => 
                <div className="w-full">
                    <Input
                        isClearable
                        type="text"
                        radius="none"
                        label="Email Address"
                        classNames={labelStyle}
                        variant="bordered"
                        color="success"
                        fullWidth
                        className="my-4"
                    />
                    <Button
                        size="lg"
                        spinner
                        radius="none"
                        fullWidth
                        className="py-7 px-8 uppercase tracking-wide bg-white hover:bg-black hover:text-white border-4 text-xl text-black font-bold"
                    >
                        Subscribe!
                    </Button>
                </div>
        }
    ]
        
    const footerItems: any = [
        {
            title: <Logo />,
            children: ""
        },
        {
            title: "Featured",
            children: features
        },
        {
            title: "Menu",
            children: menus
        },
        {
            title: "Contact Us",
            children: contacts
        },
        {
            title: "Follow Us",
            children: follows
        },
        {
            title: "Join Us",
            children: join
        }
    ];

    return ( 
        <div className="w-full py-14 px-5 bg-gradient-to-r from-blue-950 to-slate-800">
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        {/* -----------------    Loop footerItems   --------------- */}
                { footerItems?.map((footerItem: any, index: number) => (
                    <div className="flex gap-3 flex-col px-2" key={index}>
                        { typeof footerItem?.title !== 'string' 
                            ? footerItem.title : 
                            <p className="uppercase text-2xl text-white font-bold tracking-wider leading-[60px]"> {footerItem.title} </p>
                        }
                        {/* -----------------    Loop footerItems children   --------------- */}
                        { Array.isArray(footerItem.children) && footerItem.children.map((item: any, idx: number) => (
                            <>
                                { item.href ? 
                                    <Link isBlock href={item.href} className="uppercase text-xl text-gray-500 font-medium pl-0" key={idx}>
                                        { item.title }
                                    </Link> :
                                    <div className={`flex ${item.icon ? 'gap-4' : 'flex-col'} select-none footer-wr-icon`} key={idx}>
                                        { item.icon }
                                        <p className={`uppercase text-xl font-semibold ${footerItem.title == 'Contact Us' ? 'text-white' : 'text-gray-500'}`}>{ item.title }</p>
                                        { item.value ? <span className="uppercase text-xl text-gray-500"> {item.value} </span> : ''}
                                        { item.sendMsg ? item.sendMsg() : '' }
                                    </div>
                                }
                            </>
                        )) }
                    </div>
                )) }
            </div>
        </div>
    );
}

