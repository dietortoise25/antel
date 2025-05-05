import { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export interface CarouselItem {
  title: string;
  text: string;
  bg: string;
  isDarkMode: boolean;
}
export default function useHeader(carouselItems?: CarouselItem[]) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [activeMode, setActiveMode] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!carouselItems) {
      return;
    }
    setDarkMode(carouselItems[current].isDarkMode);
  }, [current, carouselItems]);

  const handleIndicator = (index: number) => {
    api?.scrollTo(index);
  };
  return {
    api,
    setApi,
    current,
    darkMode,
    activeMode,
    setActiveMode,
    handleIndicator,
    setDarkMode,
  };
}
