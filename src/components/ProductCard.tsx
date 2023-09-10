"use client";

import React from "react";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import Loading from "@/app/loading";
import { HeartFilledIcon } from "./Icons";

export default function ProductCard(props: any) {
  const { product } = props;

  const colors =
    product?.stock.filter(
      (el: any, index: any, arr: any) => arr[index].colorID === el.colorID
    ) || [];

  return (
    <div className="py-3 px-1 relative bg-white shadow-xl rounded-s-md group/prod-hover">
      <Card
        shadow="none"
        isPressable
        isFooterBlurred
        allowTextSelectionOnPress
        onPress={() => console.log("item pressed")}
      >
        <CardBody>
          {!product ? (
            <Loading />
          ) : (
            <Image
              shadow="sm"
              loading="eager"
              radius="none"
              isZoomed
              isBlurred
              alt={product.productName}
              className="w-full object-cover h-[303px]"
              src={product.productImages[0].urlImage}
            />
          )}
          <div className="max-w-[303px] flex flex-col gap-2 mt-3">
            <p className="text-xl font-semibold"> {product.productName} </p>
            <div className="flex justify-between">
              <p className="text-xl text-[#757575]"> {colors.length} Colors </p>
              <b className="text-xl text-danger"> ${product.stock[0].price} </b>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="flex justify-between gap-4 flex-wrap w-full min-w-[303px] py-1 px-5 group-hover/item:visible">
        <Button
          color="danger"
          radius="sm"
          className="uppercase flex-1 max-w-[45%]"
        >
          <HeartFilledIcon />
        </Button>
        <Button
          radius="sm"
          className="bg-slate-700 text-white uppercase flex-1 max-w-[45%]"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
