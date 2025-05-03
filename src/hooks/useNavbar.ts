import { NavbarProps } from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function useNavbar({ setActiveMode, activeMode }: NavbarProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (scrolled) {
        setActiveMode(true);
      } else {
        setActiveMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveMode]);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (tabName: string) => {
    setActiveMenu(tabName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return {
    activeMenu,
    handleMouseEnter,
    handleMouseLeave,
    activeMode,
    setActiveMode,
    setActiveMenu,
  };
}
