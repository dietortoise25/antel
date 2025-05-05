import logoAmazon from "/assets/Sessions/Strengths/logo-amazon.png"
import logoFirst from "/assets/Sessions/Strengths/logo-first.png"
import logoHyundai from "/assets/Sessions/Strengths/logo-hyundai.png"
import logoNv from "/assets/Sessions/Strengths/logo-nv.png"
import logoCat from "/assets/Sessions/Strengths/logo-cat.png"
import logoJet from "/assets/Sessions/Strengths/logo-jet.png"
import imageRight from "/assets/Sessions/Strengths/Top industry leaders 1.png"

function StrengthSection() {
    return (
        <div className="bg-white flex flex-col justify-center items-center">

            <div className=" text-zinc-900 text-6xl font-semibold mt-[120px] w-full text-center">Top industry leaders.</div>
            <div className="w-[1520px] h-[262px] flex justify-between items-center   relative">
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
            <div className="w-[1520px] h-[715px] flex justify-between">
                <div className="relative flex flex-col justify-center">
                    <div className=" absolute top-[20px] text-neutral-100 text-[200px] font-normal leading-[200px] select-none">“</div>
                    <div>
                        <div className="w-[622px] text-zinc-900 text-3xl font-medium leading-[32px] tracking-tight">Indigo Energy has chosen to partner with Autel Energy and these DC Fast chargers for this project because of the great value that they provide at their competitive price point.<br />People love the bright, responsive screens here at the front, as well as the nice, sturdy cables that they're able to connect with their vehicles to inspire some confidence in their charging experience.</div>
                        <div className=" text-zinc-800 text-xl font-normal leading-7 mt-[25px]">Colson Rivers</div>
                        <div className=" text-zinc-800 text-xl font-normal leading-7">Account Executive</div>
                    </div>
                </div>
                <div className="size-[715px] rounded-3xl overflow-hidden" >

                    <img src={imageRight} alt="Top industry leaders 1"
                        className="w-full h-full" />

                </div>
            </div>

        </div>
    );
}
export default StrengthSection;
