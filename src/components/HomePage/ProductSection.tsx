import { cn } from "@/lib/utils";
import { useState } from "react";
import ProductCard from "./ProductCard";
const tabs = [
    { name: "DC series" },
    { name: "AC series" },
]

const ProductsInfo = [
    {
        title: "MaxiCharger AC Pro",
        description: "640 kW ultra fast charger",
        image: "/assets/Sessions/Products/product-1.png",
        series: "AC series"
    },
    {
        title: "MaxiCharger  AC Elite",
        description: "Flexible installation, 40 kW DC charging",
        image: "/assets/Sessions/Products/product-2.png",
        series: "AC series"
    },
    {
        title: "MaxiCharge AC ultra",
        description: "Versatile and efficient,19.2 kW*2 AC charging",
        image: "/assets/Sessions/Products/product-3.png",
        series: "AC series"
    },
    {
        title: "MaxiCharger DC Pro",
        description: "640 kW ultra fast charger",
        image: "/assets/Sessions/Products/product-1.png",
        series: "DC series"
    },
    {
        title: "MaxiCharger  DC Elite",
        description: "Flexible installation, 40 kW DC charging",
        image: "/assets/Sessions/Products/product-2.png",
        series: "DC series"
    },
    {
        title: "MaxiCharge DC ultra",
        description: "Versatile and efficient,19.2 kW*2 DC charging",
        image: "/assets/Sessions/Products/product-3.png",
        series: "DC series"
    },
]
function ProductSection() {
    const [activeTab, setActiveTab] = useState(0); // 0 for DC series, 1 for AC series
    return (
        <div className="w-full h-full bg-white flex justify-center">
            <div className="w-[1520px] mb-[104px]">
                <div className="text-zinc-900 text-6xl font-semibold mt-[120px] mb-[42px] text-center">Products.</div>
                <div className=" flex justify-center mb-[60px] ">
                    <div className="w-[500px] h-20 bg-neutral-100 rounded-lg flex justify-between items-center px-[8px]">
                        {tabs.map((tab, index) => (

                            <div key={index}
                                className={cn("w-60 h-16  flex justify-center items-center",
                                    index === activeTab && "bg-white rounded-lg shadow-[0px_1px_10px_0px_rgba(0,0,0,0.05)]")}
                            >
                                <div
                                    className=" text-zinc-900 text-2xl font-medium cursor-pointer"
                                    onClick={() => setActiveTab(index)}
                                >{tab.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-around">
                    {ProductsInfo.map((product, index) => (
                        product.series === tabs[activeTab].name && (
                            <ProductCard key={index}
                                {...product}
                            />
                        )
                    ))
                    }
                </div>
                <div className="bg-lime-200 flex justify-center mb-[136px]"></div>
            </div>
        </div>
    );
}
export default ProductSection;
