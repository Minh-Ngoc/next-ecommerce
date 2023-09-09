import { Button } from "@nextui-org/react";
import banner from "@/assets/imgs/banner/banner.png";
import text from "@/assets/imgs/banner/text.png";
import vector from "@/assets/imgs/banner/vector.png";
import model1 from "@/assets/imgs/banner/model1.png";
import model2 from "@/assets/imgs/banner/model2.png";
import { Image } from "@nextui-org/react";

export default function Banner() {
    const bgStyle = {
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
    };
    
    return (
        <div
          style={bgStyle}
          className={`relative h-[800px] w-full flex justify-center items-center bg-cover`}
        >
          <div className="flex flex-col justify-between mr-[8%] mb-[10%]">
            <div className="relative">
              <Image
                src={vector.src}
                alt="Follow us on Twitter"
                loading="eager"
                className="w-ful h-auto -right-16 top-16 rounded-none transform translate-x-3/10 -translate-y-3/10"
              />
              <Image
                src={text.src}
                alt="Follow us on Twitter"
                loading="eager"
                className="mb-50px object-cover w-full h-auto"
              />
            </div>
            <div className="mt-10">
              <Button
                size="lg"
                spinner
                radius="none"
                className="py-7 px-8 uppercase tracking-wide bg-transparent border-black hover:bg-black hover:text-white border-4 text-xl text-black font-bold"
              >
                shop now
              </Button>
            </div>
          </div>
          <div className="flex relative">
            <Image
              src={model1.src}
              alt="Follow us on Twitter"
              loading="eager"
              className="w-full h-auto"
            />
            <Image
              src={model2.src}
              alt="Follow us on Twitter"
              loading="eager"
              className="w-full h-auto transform translate-x-1/10 translate-y-1/16"
            />
          </div>
        </div>
    );
}