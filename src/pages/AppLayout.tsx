import Navbar from "@/components/Navbar";
import useHeader from "@/hooks/useHeader";
import { Outlet } from "react-router-dom";

function AppLayout() {
    const { activeMode, setActiveMode } = useHeader()
    return (
        <div>
            <Navbar activeMode={activeMode} setActiveMode={setActiveMode} />
            <div className="pt-[104px]">
                <Outlet />
            </div>
        </div>
    );
}
export default AppLayout;
