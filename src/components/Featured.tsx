import ImageFt1 from "@/assets/imgs/featured/nike-just-do-it.jpg";
import ImageFt2 from "@/assets/imgs/featured/nike-just-do-it (1).jpg";
import { Button, Image, Link } from "@nextui-org/react";

export default function Featured() {
    const FeatureItems: any[] = [ 
        {
            category: "Iconic Forever",
            title: "Air Force 1",
            titleBtn: "Shop All",
            image: ImageFt1,
            href: "/shop",
        },
        {
            category: "Nike ACG",
            title: "Hike-Ready Gear",
            titleBtn: "Shop",
            image: ImageFt2,
            href: "/shop",
        }
    ];
    return (
        <div className="my-24">
            <h3 className="text-4xl font-medium">Featured</h3>
            <div className="mt-8 flex gap-4 flex-wrap justify-between">
                { FeatureItems?.map((item: any, index: number) => 
                    <Link href={item.href} className="relative flex-1" key={index}>
                        <Image
                            src={item.image.src}
                            radius="none"
                            loading="eager"
                            removeWrapper
                            className="w-full h-auto object-contain"
                        />
                        <div className="absolute bottom-[10%] left-[10%] z-10">
                            <p className="text-2xl text-white"> {item.category} </p>
                            <h2 className="text-4xl mt-3 mb-12 text-white font-normal"> {item.title} </h2>
                            <Button
                                size="lg"
                                spinner
                                radius="md"
                                className="py-6 px-8 uppercase tracking-wide bg-white hover:bg-black hover:text-white text-black text-xl font-bold border-4"
                            >
                                { item.titleBtn }
                            </Button>
                        </div>    
                    </Link>
                ) }
            </div>
        </div>
    )
}