import FacebookIcon from "@/assets/Footer/FacebookIcon";
import X from "@/assets/Footer/X";
import Youtube from "@/assets/Footer/Youtube";
import { Button } from "../ui/button";
import InsIcon from "@/assets/Navbar/InsIcon";

const footerContent = [
    { title: "Solutions", content: ["CPO", "Fleets", "Destination", "Home"] },
    { title: "Products", content: ["MaxiCharger DC HiPower", "MaxiCharger DC Fast", "MaxiCharger DC Compact", "MaxiCharger AC Pro", "MaxiCharger AC Elite", "MaxiCharger AC Ultra", "Software", "All Products"] },
    { title: "Resources", content: ["Event", "FAQ", "Blog", "Incentives"] },
    { title: "About", content: ["Why Autel", "Contact Us", "Sustainability", "Newsroom"] },
]


function Footer() {
    return (
        <div className="w-full h-121 bg-neutral-100 flex justify-center">
            <div className="w-[1520px] h-full  flex flex-col">
                <div className="w-full h-[350px] mt-[66px] border-b border-neutral-400 flex justify-between">
                    {footerContent.map((footer) => (
                        <div className="w-full h-full" key={footer.title}>
                            <div className="mb-[20px] text-zinc-900 text-base font-medium">{footer.title}</div>
                            <div className="text-stone-500 text-sm font-normal flex flex-col gap-[15px]">
                                {footer.content.map((content, index) => (
                                    <div className="cursor-pointer" key={index}>{content}</div>
                                ))}
                            </div>
                        </div>
                    ))
                    }
                    <div className="w-full h-full">
                        <div className="mb-[20px] text-zinc-900 text-base font-medium">Follow Autel</div>
                        <div className="w-[200px] h-6 flex justify-between">
                            <div>
                                <InsIcon />
                            </div>
                            <div>
                                <FacebookIcon />
                            </div>
                            <div>
                                <X />
                            </div>
                            <div>
                                <Youtube />
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <Button variant="outline" className="text-green-500 text-base font-medium w-40 h-10 rounded-sm border border-green-500 bg-neutral-100">
                                Become A Dealer
                            </Button>
                        </div>

                    </div>


                </div>
                <div className="w-full h-[67px] flex">
                    <div className="w-[657px] h-full text-stone-500 text-xs font-normal flex items-center justify-between">
                        <div>Privacy</div>          <div>Terms of Use</div>             <div>Legal Information</div>           <div>Copyright © 2004-2021 AUTEL. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
