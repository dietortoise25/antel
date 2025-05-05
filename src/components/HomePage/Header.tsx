import Navbar from "../Navbar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import arrowRight from "@/assets/Hero/Carousel/arrow-right.png"
import { cn } from "@/lib/utils";
import bg1 from '@/assets/Hero/bg-1.png'
import bg2 from '@/assets/Hero/bg-2.png'
import bg3 from '@/assets/Hero/bg-3.png'
import useHeader from "@/hooks/useHeader";
// import Autoplay from "embla-carousel-autoplay"

const carouselItems = [
    { bg: bg1, title: "Full-Scenario", text: "Intelligent Charging Network Solution", isDarkMode: false },
    { bg: bg2, title: "One-Stop ESS-EVSE Solution", text: "", isDarkMode: true },
    { bg: bg3, title: " Pioneering the Future of Digital Energy Through", text: "Solar, Storage, and Charging Excellence", isDarkMode: true },
]


function Header() {
    const {
        api,
        setApi,
        current,
        darkMode,
        activeMode,
        setActiveMode,
        handleIndicator,
    } = useHeader(carouselItems)

    return (
        <div>
            <Navbar darkMode={darkMode} activeMode={activeMode} setActiveMode={setActiveMode} />

            <Carousel
                className="relative"
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
            // plugins={[
            //     Autoplay({
            //         delay: 2000,
            //     }),
            // ]}
            >
                <CarouselContent>
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <div>
                                <div
                                    style={{ backgroundImage: `url(${item.bg})` }}
                                    className={cn("w-full h-[1080px] bg-cover bg-no-repeat flex justify-center",)}
                                >
                                    <div className="mt-[225px]">
                                        <div className="w-[1125px] h-32 text-center">
                                            <span className="text-white text-5xl font-medium leading-[62px] [text-shadow:_0px_2px_2px_rgb(0_0_0_/_0.25)]">
                                                {item.title} <br />
                                            </span>
                                            <span className="text-white text-6xl font-semibold leading-[62px] [text-shadow:_0px_2px_2px_rgb(0_0_0_/_0.25)]">
                                                {item.text}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* darkMode遮罩 */}
                {darkMode && <div className="absolute top-0 w-full h-72 bg-gradient-to-b from-black/75 from 30% to-black/0" />
                }

                {/* 轮播图按钮 */}
                <div className="absolute top-1/2 w-full  flex justify-center">
                    <div className="w-[1520px] flex justify-between">
                        <button className="size-16 hover:scale-110 select-none"
                            onClick={() => api?.scrollTo(current - 1)}
                        >
                            <img src={arrowRight} alt="arrowRight" className="rotate-180" />
                        </button>
                        <button className="size-16 hover:scale-110 select-none"
                            onClick={() => api?.scrollTo(current + 1)}
                        >
                            <img src={arrowRight} alt="arrowRight" />
                        </button>
                    </div>
                </div>

                {/* Indicator */}
                <div className="w-[320px] flex justify-between items-center absolute h-[3px] bottom-49 left-1/2 -translate-x-1/2">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            // className={`w-[100px]  h-full ${index === current ? 'bg-white' : 'bg-white/30'
                            //     }`}
                            className={cn(
                                "w-[100px] h-full",
                                index === current ? "bg-white" : "bg-white/30",)
                            }
                            onClick={() => handleIndicator(index)}
                        ></button>
                    ))}
                </div>
            </Carousel>


        </div>
    );
}
export default Header;
