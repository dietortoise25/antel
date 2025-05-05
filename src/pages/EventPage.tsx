import EventCard from "@/components/EventCard";
import { cn } from "@/lib/utils";
import { useState } from "react";
import eventImage1 from "@/assets/EventPage/eventtitleImage-1.png";
import eventImage2 from "@/assets/EventPage/eventtitleImage-2.png";
import arrowDown from "@/assets/EventPage/arrowDown.svg";



export interface Event {
    titleImage: string;
    title: string;
    date: string;
    location: string;
    eventId: string | number;
}

const events: Event[] = [
    {
        titleImage: eventImage1,
        title: "Electric Vehicles, and How to Charge Your EV, Promise to be Big Topics at New York ...",
        date: "Apr 05, 2024",
        location: "California",
        eventId: "1",
    },
    {
        titleImage: eventImage2,
        title: "Nordic EV Summit 2024",
        date: "Apr 05, 2024",
        location: "California",
        eventId: "2",
    },
    {
        titleImage: eventImage1,
        title: "Nordic EV Summit 2024",
        date: "Apr 05, 2024",
        location: "California",
        eventId: "2",
    },
    {
        titleImage: eventImage2,
        title: "Nordic EV Summit 2024",
        date: "Apr 05, 2024",
        location: "California",
        eventId: "2",
    },
    {
        titleImage: "",
        title: "Nordic EV Summit 2024",
        date: "Apr 05, 2024",
        location: "California",
        eventId: "2",
    },
    {
        titleImage: "",
        title: "Nordic EV Summit 2024",
        date: "Apr 05, 2024",
        location: "California",
        eventId: "2",
    },
    {
        titleImage: "",
        title: "Nordic EV Summit 2024",
        date: "Apr 05, 2024",
        location: "California",
        eventId: "2",
    },
]
function EventPage() {
    const active = true;
    const [showAll, setShowAll] = useState(false);
    const displayEvents = showAll ? events : events.slice(0, 6);
    return (
        <div className="flex justify-center">
            <div className="w-[1520px]">
                <h1 className="mt-[100px] mb-[60px] text-center text-zinc-900 text-6xl font-semibold">Events.</h1>
                <div className="flex justify-center">
                    <div className="w-36 text-zinc-900  text-xl font-normal text-center">Past</div>
                    <div className="w-36 text-zinc-900  text-xl font-normal text-center">Upcoming</div>
                </div>
                <div className="mt-[17px] flex justify-center relative">
                    <div className="relative w-72">
                        <div className="w-72 h-0 outline outline-offset-[-0.25px] outline-neutral-400/30" />
                        <div className={cn("hidden absolute top-0 left-0 w-36 h-0 outline-2 outline-offset-[-1px] outline-green-500",
                            !active && "block"
                        )} />
                        <div className={cn("hidden absolute top-0 left-36 w-36 h-0 outline-2 outline-offset-[-1px] outline-green-500",
                            active && "block"
                        )} />
                    </div>
                </div>
                <div className="container mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayEvents?.map((event, index) => <EventCard key={index} event={event} />)}
                </div>
                <div className="flex justify-center items-center mt-[60px]">
                    <button
                        onClick={() => setShowAll(true)}
                        className={cn("hidden text-zinc-900 text-base font-normal items-center", !showAll && events.length > 6 && "flex")}
                    >Learn more
                        <img src={arrowDown} alt="" className="ml-1" />
                    </button>
                </div>

            </div>

        </div>
    );
}
export default EventPage;
