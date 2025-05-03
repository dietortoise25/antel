interface ProductCardProps {
    image: string;
    title: string;
    description: string;
}



function ProductCard({ image, title, description }: ProductCardProps) {
    return (
        <div className="w-[460px] h-[570px] bg-neutral-100 rounded-[10px] shadow-[16px_16px_40px_0px_rgba(0,0,0,0.05)] py-[80px] flex flex-col justify-between" >
            <div className="w-full  flex flex-col justify-center items-center gap-[10px]">
                <div className="text-zinc-900 text-3xl font-medium ">{title}</div>
                <div className="text-stone-500 text-base font-normal  leading-snug">{description}</div>
            </div>
            <div className="w-full h-[280px]  flex justify-center">
                <img src={image} alt="" />
            </div>
        </div>


    );
}
export default ProductCard;
