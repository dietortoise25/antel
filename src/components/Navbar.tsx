import GlobalIcon from "@/assets/Navbar/GlobalIcon";
import logo from "@/assets/Navbar/logo.png";
import SearchIcon from "@/assets/Navbar/SearchIcon";
import ShopIcon from "@/assets/Navbar/ShopIcon";
import UserIcon from "@/assets/Navbar/UserIcon";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const navTabs = [
    { name: "Solution", path: "/solution" },
    { name: "Products", path: "/products" },
    { name: "Partners", path: "/partners" },
    { name: "Service", path: "/service" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
]

function Navbar({ darkMode }: { darkMode: boolean }) {
    return (
        <div className="w-full flex flex-col items-center fixed z-50 ">
            <div className={cn(darkMode ? "bg-black w-full flex justify-center" : "bg-white w-full flex justify-center")}>
                <div className="h-[40px] w-[1520px] flex justify-end">
                    <div className="space-x-[30px] flex items-center">
                        <div className="w-[22px] h-[22px]">
                            <SearchIcon color={darkMode ? "white" : "black"} />
                        </div>
                        <div className="w-[22px] h-[22px]">
                            <ShopIcon color={darkMode ? "white" : "black"} />
                        </div>
                        <div className="w-[22px] h-[22px]">
                            <GlobalIcon color={darkMode ? "white" : "black"} />
                        </div>
                        <div className="w-[22px] h-[22px]">
                            <UserIcon color={darkMode ? "white" : "black"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[64px]">
                <div className="w-[1520px] h-full flex justify-between  items-center">
                    <div className="flex gap-[50px]">
                        <Link to="/" className="w-[130px] h-[22px] ">
                            <img src={logo} />
                        </Link>
                        <div className={cn("flex gap-[30px]", darkMode && "text-white")}>
                            {navTabs.map((tab, index) => (
                                <Link to={tab.path} key={index} className="hover:text-green-400">
                                    {tab.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={cn("flex gap-[24px] items-center", darkMode && "text-white")}>
                        <div className="hover:text-green-400">MediaBank</div>
                        <div className="hover:text-green-400">Shop</div>
                        <button className="bg-green-400 text-white py-2 px-4 rounded-md">Talk to An Expert</button>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Navbar;
