import ProductCard from "./ProductCard";

const ProductsInfo = [
    {
        title: "CPO Charging",
        description: "Innovate your business with Autel Smart Charging Network and invest for the future success. We offer both air-cooled fast charging and liquid-cooled ultra-fast charging solutions that are compatible with most vehicle models, ensuring fast and smooth charging experience with multiple payment methods.",
        image: "/assets/Sessions/solution-card-1.png",
        link: "#",
    },
    {
        title: "Fleet Charging",
        description: "Innovate your business with Autel Smart Charging Network and invest for the future success. We offer both air-cooled fast charging and liquid-cooled ultra-fast charging solutions that are compatible with most vehicle models, ensuring fast and smooth charging experience with multiple payment methods.",
        image: "/assets/Sessions/solution-card-2.png",
        link: "#"
    },
    {
        title: "Destination Charging",
        description: "Autel offers one-stop solution for business owners with enhanced reliability and ensure higher yields. With customized consultance, reliable design, intelligent software and global service network, we ensure long-term worry free charging experience.",
        image: "/assets/Sessions/solution-card-3.png",
        link: "#"
    },
    {
        title: "Residential Charing",
        description: "We strive to create an ultimate and seamless charging experience for desired homes with sleek design, top-tier reliability and superior charging efficiency. Our smart home charging solution optimizes charging power, prioritizes safety, and intelligently integrates green energy for future possibilities.",
        image: "/assets/Sessions/solution-card-4.png",
        link: "#"
    }
]

function ProductSection() {
    return (
        <div className="w-full bg-neutral-100 flex justify-center">
            <div className="w-[1520px]">
                <div className="text-zinc-900 text-6xl font-semibold mt-[120px] mb-[60px] text-center">Solution.</div>
                {ProductsInfo.map((product, index) => (
                    <ProductCard key={index}
                        {...product}
                        isOdd={index % 2 !== 0}
                    />
                ))
                }
            </div>
        </div>
    );
}
export default ProductSection;
