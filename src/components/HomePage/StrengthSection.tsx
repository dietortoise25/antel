import logoAmazon from "/assets/Sessions/Strengths/logo-amazon.png"
import logoFirst from "/assets/Sessions/Strengths/logo-first.png"
import logoHyundai from "/assets/Sessions/Strengths/logo-hyundai.png"
import logoNv from "/assets/Sessions/Strengths/logo-nv.png"
import logoCat from "/assets/Sessions/Strengths/logo-cat.png"
import logoJet from "/assets/Sessions/Strengths/logo-jet.png"

function StrengthSection() {
    return (
        <div className="bg-white flex flex-col justify-center items-center">

            <div className=" text-zinc-900 text-6xl font-semibold mt-[120px] w-full text-center">Top industry leaders.</div>
            <div className="w-[1520px] h-[262px] flex justify-between bg-black/20 mt-[70px] relative">
                <div className="w-[220px] h-[120px] p-[40px]">
                    <img src={logoAmazon} alt="" className="w-full h-auto flex justify-center items-center" />
                </div>
                <div className="w-[220px] h-[120px]">
                    <img src={logoFirst} alt="" className="w-full h-auto flex justify-center items-center" />
                </div>
                <div className="w-[220px] h-[120px] flex items-center px-[23px]">
                    <img src={logoHyundai} alt="" className="w-full h-auto flex justify-center items-center" />
                </div>
                <div className="w-[220px] h-[120px] flex items-center px-[33px]">
                    <img src={logoNv} alt="" className="w-full h-auto flex justify-center items-center" />
                </div>
                <div className="w-[220px] h-[120px] flex items-center px-[21px]">
                    <img src={logoCat} alt="" className="w-full h-auto flex justify-center items-center" />
                </div>
                <div className="w-[220px] h-[120px] flex items-center px-[14px]">
                    <img src={logoJet} alt="" className="w-full h-auto flex justify-center items-center" />
                </div>
                <div className="absolute left-0 w-52 h-[120px] bg-gradient-to-l from-white/10 to-white to 74%" />
                <div className="absolute right-0 w-52 h-[120px] bg-gradient-to-r from-white/10 to-white to 74%" />

            </div>

        </div>
    );
}
export default StrengthSection;
