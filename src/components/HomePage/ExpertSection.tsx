import { Link } from "react-router-dom";
import expertImage from "/assets/Sessions/Expert/Expert.png";
import arrowRight from "@/assets/Sessions/arrow.png";
import IconTop from "/assets/Sessions/Expert/icon1.svg";
import IconBottom from "/assets/Sessions/Expert/icon2.svg";

function ExpertSection() {
    return (
        <div className="w-full h-[448px]  flex justify-center relative bg-[#FFF]">
            <div className="w-[1520px] h-full flex relative">
                <div className="w-1/2 h-[388px]  flex items-end justify-end mt-[60px]">
                    <img src={expertImage} alt="expert" className=" w-full max-h-full object-contain translate-x-25" />
                </div>
                <div className=" w-1/2 h-full">
                    <div className="ml-[60px] mt-[200px] mb-[100px] w-full h-[146px] flex flex-col justify-between">
                        <div className=" text-zinc-900 text-5xl font-medium">Talk to an experts.</div>
                        <div className="w-96  text-stone-500 text-sm font-normal">Questions? We have answers! Just click the button below to drop us a line. We look forward to hearing from you!</div>
                        <Link to={"#"} className=" text-green-500 text-base font-normal flex">Contant us
                            <span className="flex justify-center items-center ml-1">
                                <img className="w-2.5" src={arrowRight} alt="" />
                            </span>
                        </Link>

                    </div>
                </div>
                <div className="flex justify-center items-center size-12 bg-white rounded-full shadow-md absolute top-[233px] right-0 hover:scale-110 cursor-pointer" >
                    <img className="w-[26px]" src={IconTop} alt="" />
                </div>
                <div className="flex justify-center items-center size-12 bg-white rounded-full shadow-md absolute top-[290px] right-0 hover:scale-110 cursor-pointer" >
                    <img className="w-[26px]" src={IconBottom} alt="" />
                </div>
            </div>
        </div>

    );
}
export default ExpertSection;
