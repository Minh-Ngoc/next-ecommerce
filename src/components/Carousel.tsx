import { Button } from "@nextui-org/react";

function Carousel() {
    return (  
        <div className="relative w-full h-5/6 rounded-3xl overflow-hidden bg-[#767676] flex flex-col justify-end text-white">
            <div className="w-full flex">
                <div className="relative w-2/5 h-full z-20"></div>
                <div className="thumbnail-list">
                    <div className="wrapper"></div>
                </div>
            </div>
            <div className="navigation">
                <Button color="primary" variant="ghost" className="h-12" /> 
                <span className="line"></span>
                <span className="ordinal-number"></span>
            </div>
        </div>
    );
}

export default Carousel;