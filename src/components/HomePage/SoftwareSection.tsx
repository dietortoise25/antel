import arrowRight from "@/assets/Sessions/arrow.png";
import { Link } from "react-router-dom";
function SoftwareSection() {
    return (
        <div className="w-full h-[800px] bg-cover bg-no-repeat bg-[url('/assets/Sessions/software-bg.png')] relative flex justify-center">
            <div className="w-[1520px] h-full flex justify-start z-99">
                <div className="mt-[200px]">
                    <div className="w-[471px] justify-start text-white text-6xl font-semibold leading-[60px]">Charging Management Software.</div>
                    <div className="w-[515px] justify-start text-neutral-100 text-base font-normal leading-normal mt-[30px]">Powered by cutting-edge cloud service technology, Autel provides a comprehensive EV charging solution that includes an advanced Charging Station Management System (CSMS), Edge Gateway, Charge App, and Payment Kiosk. Our product ensures secure, efficient, and uninterrupted charging, maximizes operational efficiency, reduces energy costs, eliminates the need for grid expansion, and seamlessly integrates with global payment standards to enhance the user experience.</div>
                    <Link to={"#"} className="justify-start text-green-500 text-base font-normal mt-[40px] flex">Learn more
                        <span className="flex justify-center items-center ml-1">
                            <img className="w-2.5" src={arrowRight} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 h-full bg-gradient-to-l from-zinc-700/0 to-zinc-950 left-0 absolute">
            </div>
        </div>
    );
}
export default SoftwareSection;
