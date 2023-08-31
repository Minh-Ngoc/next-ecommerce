import React from "react";
import { Tabs, Tab, Avatar, Badge } from "@nextui-org/react";
import Logo from "../Logo";
import Link from 'next/link';
import { Link as LinkUI } from "@nextui-org/react";
import { navbarItems, subNavItem } from './variable';

export default function Header() {

    return (
        <div className="flex flex-wrap w-full items-center bg-gradient-to-r from-blue-950 to-slate-800 py-8 px-12 justify-between">
            <Logo />
            <Tabs color="danger" size="lg" variant="light" aria-label="Tabs variants" radius="sm" classNames={{ tab: "px-6 h-12"}}>
            {   navbarItems?.map((tab, _) => 
                    <Tab
                        key={`${tab.title}${_}`}
                        title={
                            <div className="flex items-center space-x-2">
                                { tab.icon }
                                { tab.href ? <Link href={tab.href} className="text-xl text-white uppercase font-medium"> {tab.title} </Link>
                                           : <span className="text-xl text-white uppercase font-medium"> {tab.title} </span>
                                }
                            </div>
                        }
                    />
            )   }
            </Tabs>   
            <div className="flex gap-8">
                { subNavItem.map((item, _) => 
                    <div key={`${item.title}${_}`} className="flex gap-4 items-center">
                        { item.href !== "/cart" 
                            ? <LinkUI href={item.href} className="text-xl text-white uppercase font-medium"> {item.title || item.icon } </LinkUI>
                            : <LinkUI href={item.href} className="text-2xl text-white uppercase font-medium flex items-center gap-5">
                                <Badge content="5" color="danger" size="lg" shape="circle" placement="top-right">
                                    <Avatar
                                        isBordered
                                        radius="full"
                                        icon={item.icon}
                                        classNames={{
                                            base: "bg-transparent",
                                        }}
                                    />
                                </Badge>
                                <span> {item.title} </span>
                            </LinkUI>
                        }
                    </div> 
                ) }
            </div> 
        </div>  
    );
}
