import GlobalIcon from "@/assets/Navbar/GlobalIcon";
import logo from "@/assets/Navbar/logo.png";
import SearchIcon from "@/assets/Navbar/SearchIcon";
import ShopIcon from "@/assets/Navbar/ShopIcon";
import UserIcon from "@/assets/Navbar/UserIcon";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { createPortal } from 'react-dom';
import MenuSolution from "./Menu/MenuSolution";
import MenuProducts from "./Menu/MenuProducts";
import MenuPartners from "./Menu/MenuPartners";
import MenuService from "./Menu/MenuService";
import MenuResources from "./Menu/MenuResources";
import MenuAbout from "./Menu/MenuAbout";
import useNavbar from "@/hooks/useNavbar";

const navTabs = [
    { name: "Solution", path: "/solution" },
    { name: "Products", path: "/products" },
    { name: "Partners", path: "/partners" },
    { name: "Service", path: "/service" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
]

export interface NavbarProps {
    darkMode?: boolean;
    activeMode: boolean;
    setDarkMode?: (darkMode: boolean) => void;
    setActiveMode: (activeMode: boolean) => void;
}

function Navbar({ darkMode, setActiveMode, activeMode }: NavbarProps) {
    const {
        activeMenu, setActiveMenu, handleMouseEnter, handleMouseLeave,
    } = useNavbar({ setActiveMode, activeMode });
    return (
        <div
            className={cn("w-full flex flex-col items-center fixed z-99 transition-all duration-300",
                activeMode ? "bg-white text-black" : darkMode ? " text-white" : "",
            )}
            onMouseEnter={() => setActiveMode(true)}
            onMouseLeave={() => setActiveMode(false)}
        >
            <div className={cn("w-full flex justify-center", activeMode ? "bg-white" : darkMode ? "bg-black/50" : "bg-white/50")}>
                <div className={cn("h-[40px] w-[1520px] flex justify-end")}>
                    <div className="space-x-[30px] flex items-center">
                        <div className="w-[22px] h-[22px] cursor-pointer">
                            <SearchIcon color={activeMode ? "black" : darkMode ? "white" : "black"} />
                        </div>
                        <div className="w-[22px] h-[22px] cursor-pointer">
                            <ShopIcon color={activeMode ? "black" : darkMode ? "white" : "black"} />
                        </div>
                        <div className="w-[22px] h-[22px] cursor-pointer">
                            <GlobalIcon color={activeMode ? "black" : darkMode ? "white" : "black"} />
                        </div>
                        <div className="w-[22px] h-[22px] cursor-pointer">
                            <UserIcon color={activeMode ? "black" : darkMode ? "white" : "black"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[64px]">
                <div className="w-[1520px] h-full flex justify-between  items-center">
                    <div className="flex h-full gap-[50px] items-center">
                        <Link to="/" className="w-[130px] h-[22px] ">
                            <img src={logo} />
                        </Link>
                        <div className={cn("flex h-full gap-[30px]")}>
                            {navTabs.map((tab) => (
                                <div
                                    key={tab.name}
                                    className={cn("h-full cursor-pointer flex items-center", tab.name === activeMenu && "font-medium")}
                                    onMouseEnter={() => handleMouseEnter(tab.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {tab.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cn("flex gap-[24px] items-center")}>
                        <div className="hover:text-green-400">MediaBank</div>
                        <div className="hover:text-green-400">Shop</div>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-400 active:bg-green-600">Talk to An Expert</button>
                    </div>
                </div>
            </div>
            {typeof document !== 'undefined' && createPortal(
                activeMenu && (
                    <div
                        className="fixed bg-white shadow-lg z-99 w-full flex justify-center"
                        style={{
                            top: "104px", // 固定在导航栏下方
                        }}
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* 根据activeMenu显示不同内容 */}
                        {activeMenu === 'Solution' && (
                            <MenuSolution />
                        )}
                        {activeMenu === 'Products' && (
                            <MenuProducts />
                        )}
                        {activeMenu === 'Partners' && (
                            <MenuPartners />
                        )}
                        {activeMenu === 'Service' && (
                            <MenuService />
                        )}
                        {activeMenu === 'Resources' && (
                            <MenuResources />
                        )}
                        {activeMenu === 'About' && (
                            <MenuAbout />
                        )}
                    </div>
                ),
                document.body
            )}
            {/* 菜单遮罩 */}
            {activeMenu !== null && <div className="fixed w-screen h-screen bg-black/50 z-50"></div>}
        </div >
    );
}
export default Navbar;
