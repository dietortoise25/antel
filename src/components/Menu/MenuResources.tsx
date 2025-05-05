import { Link } from "react-router-dom";

function MenuResources() {
    return (
        <div className="w-[1336px] mt-[40px] mb-[70px] flex justify-between">

            <div className="w-[1060px] flex flex-col">
                <Link to="/resources/event">
                    Event
                </Link>
            </div>
        </div>
    );
}
export default MenuResources;
