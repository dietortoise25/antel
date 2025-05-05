import FacebookIcon from "@/assets/Footer/FacebookIcon";
import X from "@/assets/Footer/X";
import Youtube from "@/assets/Footer/Youtube";
import { Button } from "../ui/button";
import InsIcon from "@/assets/Navbar/InsIcon";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "/assets/Footer/logo.svg";
import separator from "/assets/Footer/Separator.svg";

const footerContent = [
    { title: "Solutions", content: ["CPO", "Fleets", "Destination", "Home"] },
    { title: "Products", content: ["MaxiCharger DC HiPower", "MaxiCharger DC Fast", "MaxiCharger DC Compact", "MaxiCharger AC Pro", "MaxiCharger AC Elite", "MaxiCharger AC Ultra", "Software", "All Products"] },
    { title: "Resources", content: ["Event", "FAQ", "Blog", "Incentives"] },
    { title: "About", content: ["Why Autel", "Contact Us", "Sustainability", "Newsroom"] },
]


function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const isHomePage = location.pathname === '/';
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="w-full h-200 bg-neutral-100 flex justify-center">

            <div className="w-[1520px] h-full  flex flex-col">
                <div className="flex justify-between items-center h-[80px]">

                    <Breadcrumb className={cn(isHomePage ? 'hidden' : 'block')}>
                        <BreadcrumbList>

                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/');
                                }}>
                                    <img src={logo} alt="" />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {pathSegments.map((segment, index) => {
                                const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                                const isLast = index === pathSegments.length - 1;

                                return [
                                    <BreadcrumbSeparator key={`sep-${index}`}>
                                        <img src={separator} alt="" />
                                    </BreadcrumbSeparator>,
                                    <BreadcrumbItem key={href}>
                                        {isLast ? (
                                            <BreadcrumbPage>
                                                {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                            </BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={href} onClick={(e) => {
                                                e.preventDefault();
                                                navigate(href);
                                            }}>
                                                {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                ];
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                    <button onClick={scrollToTop}
                        className="text-neutral-400 text-xs font-normal"
                    >back to top</button>
                </div>
                <div className="w-full h-[350px] mt-[66px]  flex justify-between">
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
                            <div className="cursor-pointer">
                                <InsIcon />
                            </div>
                            <div className="cursor-pointer">
                                <FacebookIcon />
                            </div>
                            <div className="cursor-pointer">
                                <X />
                            </div>
                            <div className="cursor-pointer">
                                <Youtube />
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <Button variant="outline" className="text-green-500 text-base font-medium w-40 h-10 rounded-sm border border-green-500 bg-neutral-100
                            hover:border-green-400 hover:text-green-400 cursor-pointer
                            ">
                                Become A Dealer
                            </Button>
                        </div>

                    </div>


                </div>
                <div className="w-full h-[67px] flex mt-[70px] border-t border-neutral-400 items-center py-[20px] ">
                    <div className="w-[657px] h-full text-stone-500 text-xs font-normal flex items-center justify-between">
                        <div>Privacy</div>          <div>Terms of Use</div>             <div>Legal Information</div>           <div>Copyright © 2004-2021 AUTEL. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
