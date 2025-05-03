import arrowRight from "@/assets/Sessions/arrow.png";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    isOdd?: boolean;
}

function SolutionCard({ title, description, image, link, isOdd }: ProductCardProps) {
    return (
        <div className={cn("w-full mb-10 bg-white rounded-[20px] shadow h-[555px] flex overflow-hidden",
            { "flex-row-reverse": isOdd }
        )} >
            <div className="w-[850px] h-full">
                <img src={image} alt="" />
            </div>
            <div className="w-[496px] flex flex-col justify-center mx-[100px]">
                <div className="text-5xl mb-[20px]">{title}</div>
                <p className="text-zinc-800 text-xl mb-[30px]">{description}</p>
                <Link className="text-green-500 text-base font-normal flex"
                    to={link}
                >
                    Learn more
                    <span className="flex justify-center items-center ml-1">
                        <img className="w-2.5" src={arrowRight} alt="" />
                    </span>
                </Link>
            </div>
        </div >
    );
}
export default SolutionCard;
