'use client';

import React from "react";
import { Button, Card, CardBody, CardFooter, Image, Tooltip} from "@nextui-org/react";
import Loading from "@/app/loading";
import { HeartFilledIcon, ShoppingCart } from "./Icons";

export default function ProductCard(props: any) {
    const { product } = props;
    const ProdHover = (
        <div className="flex justify-center gap-4 flex-wrap w-full min-w-[303px] py-1 bg-white">
            <Button color="primary" radius="sm" className="uppercase flex-1 max-w-[40%]">
                <ShoppingCart />
            </Button>
            <Button color="danger" radius="sm" className="uppercase flex-1 max-w-[40%]">
                <HeartFilledIcon />
            </Button>
        </div>
    );
    return (
        <div className="py-3 px-1 relative bg-white shadow-xl rounded-s-md group hover:shadow-lg transition duration-200">
            <Card shadow="none" isPressable isFooterBlurred allowTextSelectionOnPress onPress={() => console.log("item pressed")}>
                <CardBody>
                    {   !product ? <Loading /> 
                        : <Image
                            shadow="sm"
                            loading="eager"
                            radius="none"
                            isZoomed
                            isBlurred
                            alt={product.name}
                            className="w-full object-cover h-[303px]"
                            src={product.images[0]}
                        />
                    } 
                    <div className="max-w-[303px] flex flex-col gap-2 mt-3">
                        <p className="text-xl font-semibold"> {product.name} </p>
                        <div className="flex justify-between">
                            <p className="text-xl text-[#757575]"> {product.color.length} Colors </p>
                            <b className="text-xl text-danger"> ${product.price} </b>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className="flex justify-center gap-4 flex-wrap w-full py-1 group-hover:visible invisible transition duration-200">
                <Button color="primary" radius="sm" className="uppercase flex-1 max-w-[40%]">
                    <ShoppingCart />
                </Button>
                <Button color="danger" radius="sm" className="uppercase flex-1 max-w-[40%]">
                    <HeartFilledIcon />
                </Button>
            </div>
        </div>
  );
}

