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
        <Tooltip
            placement="bottom"
            content={ProdHover}
            offset={-180}
            classNames={{
                base: "bg-transparent px-0 py-0",
            }}
            shadow="sm"
        >
            <Card className="w-max" isPressable isFooterBlurred allowTextSelectionOnPress>
                <CardBody className="py-3 px-2 relative">
                    {   !product ? <Loading /> 
                        : <Image
                            shadow="sm"
                            loading="lazy"
                            radius="lg"
                            alt={product.name}
                            className="w-full object-contain h-[303px]"
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
        </Tooltip>
  );
}

