import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel"
import arrowRight from "@/assets/Hero/Carousel/arrow-right.png"


function Header() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        current === 1 || current === 2 ? setDarkMode(true) : setDarkMode(false)
    }, [current])

    useEffect(() => {
        if (!api) {
            return
        }
        setCurrent(api.selectedScrollSnap())
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])



    return (
        <div>
            {/* 轮播 */}
            <Navbar darkMode={darkMode} />

            <Carousel setApi={setApi} className="relative">
                <CarouselContent>
                    <CarouselItem>
                        <div>
                            <div className="w-full h-[1080px] 
                        bg-[url('@/assets/Hero/bg-1.png')] bg-cover bg-no-repeat flex justify-center"
                            >
                                <div className="mt-[225px]">
                                    <div className="w-[1125px] h-32 text-center">
                                        <span className="text-white text-5xl font-medium leading-[62px] [text-shadow:_0px_2px_2px_rgb(0_0_0_/_0.25)]">
                                            Full-Scenario <br />
                                        </span>
                                        <span className="text-white text-6xl font-semibold leading-[62px] [text-shadow:_0px_2px_2px_rgb(0_0_0_/_0.25)]">
                                            Intelligent Charging Network Solution
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>
                            <div className="w-full h-[1080px] 
                        bg-[url('@/assets/Hero/bg-2.png')] bg-cover bg-no-repeat flex justify-center"
                            >
                                <div className="mt-[225px]">
                                    <div className="w-[1125px] h-32 text-center">
                                        <span className="text-white text-5xl font-medium leading-[62px] [text-shadow:_0px_2px_2px_rgb(0_0_0_/_0.25)]">
                                            One-Stop ESS-EVSE Solution <br />
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>
                            <div className="w-full h-[1080px] 
                        bg-[url('@/assets/Hero/bg-3.png')] bg-cover bg-no-repeat flex justify-center"
                            >
                                <div className="mt-[225px]">
                                    <div className="w-[1125px] h-32 text-center">
                                        <span className="text-white text-5xl font-medium leading-[62px] [text-shadow:_0px_2px_2px_rgb(0_0_0_/_0.25)]">
                                            Pioneering the Future of Digital Energy Through
                                            <br />Solar, Storage, and Charging Excellence
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                </CarouselContent>
                {/* 遮罩 */}
                {darkMode && <div className="absolute top-0 w-full h-72 bg-gradient-to-b from-black/75 from 30% to-black/0" />
                }
                <div className="absolute top-1/2 w-full  flex justify-center">
                    <div className="w-[1520px] flex justify-between">
                        <button className="size-16 hover:scale-110"
                            onClick={() => api?.scrollTo(current - 1)}
                        >
                            <img src={arrowRight} alt="arrowRight" className="rotate-180" />
                        </button>
                        <button className="size-16 hover:scale-110"
                            onClick={() => api?.scrollTo(current + 1)}
                        >
                            <img src={arrowRight} alt="arrowRight" />
                        </button>
                    </div>
                </div>
            </Carousel>


        </div>
    );
}
export default Header;
