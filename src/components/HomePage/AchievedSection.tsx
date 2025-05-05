import map from "/assets/Sessions/Achevied/map.png"


function AchievedSection() {
    return (
        <div className="flex justify-center">
            <div className="w-[1520px]">
                <div className="text-zinc-900 text-6xl font-semibold flex justify-center mt-[152px] mb-[60px]">What We've Achieved.</div>
                <div className="w-full h-[613px]  flex justify-between">
                    <div className="flex flex-col justify-between">
                        <div className="w-[488px] h-[290px] rounded-[20px] bg-neutral-100 flex items-center justify-center flex-col gap-[10px]">
                            <div className="text-center justify-start">
                                <span className="text-green-500 text-7xl font-normal">
                                    156K
                                </span>
                                <span className="text-green-500 text-3xl font-normal">+</span>
                            </div>
                            <div className="text-center justify-start text-zinc-800 text-xl font-normal">total chargers worldwide</div>
                        </div>
                        <div className="w-[488px] h-[290px] rounded-[20px] bg-neutral-100 flex items-center justify-center flex-col gap-[10px]">
                            <div className="text-center justify-start">
                                <span className="text-green-500 text-7xl font-normal">
                                    1650
                                </span>
                                <span className="text-green-500 text-3xl font-normal">+</span>
                            </div>
                            <div className="text-center justify-start text-zinc-800 text-xl font-normal">global patents
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[481px] h-full rounded-[20px] bg-neutral-100 flex flex-col justify-evenly items-center">
                            <img src={map} alt="" className="w-[440px]" />
                            <div>
                                <div className="text-center justify-start">
                                    <span className="text-green-500 text-7xl font-normal">
                                        79
                                    </span>
                                    <span className="text-green-500 text-3xl font-normal">+</span>
                                </div>
                                <div className="text-center justify-start text-zinc-800 text-xl font-normal mt-[10px]">countries powered <br /> by Autel
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="w-[488px] h-[290px] rounded-[20px] bg-neutral-100 flex items-center justify-center flex-col gap-[10px]">
                            <div className="text-center justify-start">
                                <span className="text-green-500 text-7xl font-normal">
                                    75,643
                                </span>
                                <span className="text-green-500 text-3xl font-normal">t</span>
                            </div>
                            <div className="text-center justify-start text-zinc-800 text-xl font-normal">of CO2 reduced
                            </div>
                        </div>
                        <div className="w-[488px] h-[290px] rounded-[20px] bg-neutral-100 flex items-center justify-center flex-col gap-[10px]">
                            <div className="text-center justify-start">
                                <span className="text-green-500 text-7xl font-normal">
                                    20
                                </span>
                                <span className="text-green-500 text-3xl font-normal">%</span>
                            </div>
                            <div className="text-center justify-start text-zinc-800 text-xl font-normal">R&D investment

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AchievedSection;
