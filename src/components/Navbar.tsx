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
    // setDarkMode?: (darkMode: boolean) => void;
    activeMode: boolean;
    setActiveMode: (activeMode: boolean) => void;
}

function Navbar({
    darkMode = false,
    setActiveMode,
    activeMode
}: NavbarProps) {
    const {
        activeMenu, setActiveMenu, handleMouseEnter, handleMouseLeave,
    } = useNavbar({ setActiveMode, activeMode });
    let navTopStyle = '';
    let navBottomStyle = '';
    let navAllStyle = '';
    if (activeMode) {
        navAllStyle = 'bg-white text-black';
        navTopStyle = 'bg-white text-black';
        navBottomStyle = 'bg-white text-black';
    } else if (darkMode) {
        navTopStyle = 'bg-black text-white';
        navBottomStyle = 'bg-transparent text-white';
    } else {
        navTopStyle = 'bg-white/50 text-black';
        navBottomStyle = 'bg-none text-black';
    }


    return (
        <>
            <div
                className={cn("fixed z-99 w-full flex flex-col items-center ",
                    navAllStyle
                )}
                onMouseEnter={() => setActiveMode(true)}
                onMouseLeave={() => setActiveMode(false)}
            >
                <div className={cn("w-full h-[40px] flex justify-center", navTopStyle)}>
                    <div className={cn(" w-[1520px] h-full flex justify-end")}>
                        <div className="space-x-[30px] flex items-center">
                            <div className="w-[22px] h-[22px] cursor-pointer">
                                <SearchIcon />
                            </div>
                            <div className="w-[22px] h-[22px] cursor-pointer">
                                <ShopIcon />
                            </div>
                            <div className="w-[22px] h-[22px] cursor-pointer">
                                <GlobalIcon />
                            </div>
                            <div className="w-[22px] h-[22px] cursor-pointer">
                                <UserIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cn("h-[64px] z-99 ", navBottomStyle)}>
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
                {
                    typeof document !== 'undefined' && createPortal(
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
                    )
                }
                {/* 菜单遮罩 */}
            </div >
            {/* 改用class控制 */}
            {<div className={cn("fixed w-screen h-screen bg-black/30 z-50 hidden", activeMenu !== null && "block")}></div>}
        </>
    );
}
export default Navbar;
