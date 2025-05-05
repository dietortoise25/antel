import { Event } from "@/pages/EventPage";
import IconLocation from "@/assets/EventPage/location.svg";

function EventCard({ event }: { event: Event }) {
    return (
        <div className="container rounded-[10px] bg-[#F7F7F7] w-full h-[480px] flex flex-col overflow-hidden items-center">
            {/* image */}
            <div className="h-6/10 w-full">
                <img src={event.titleImage} alt="" className="w-full h-full" />
            </div>
            {/* content */}
            <div className="h-4/10 w-86/100 mx-[40px] mt-[30px]">
                <div className="flex justify-between items-center text-green-500 text-base font-medium leading-normal">
                    <div className="flex gap-1.5 items-center">
                        <span><img src={IconLocation} alt="" /></span>
                        {event.location}</div>
                    <div>{event.date}</div>
                </div>
                <div className="mt-[17px] text-zinc-900 text-xl font-medium font-['Inter'] leading-7">
                    {event.title}
                </div>
            </div>
        </div>
    );
}
export default EventCard;
