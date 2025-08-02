"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
export const NavbarSection = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="bg-rose-900">
      <div className="flex items-center justify-between px-4 max-w-[1312px] mx-auto h-24">
        <div>
          <h5 className="font-bold text-[32px] text-white">xinder</h5>
        </div>
        <div className="flex items-center py-3 px-2">
          <div className="hidden lg:flex  gap-4">
            <ul className="flex items-center gap-4">
              <li className="text-white">Explore</li>
              <li className="text-white">Solutions</li>
              <li className="text-white">Articles</li>
              <li className="text-white">
                <a href="">Sing In</a>
              </li>
            </ul>
            <Button className="bg-rose-900 text-white hover:bg-rose-900 border border-white">
              Join Now
            </Button>
          </div>
          <Button
            variant="ghost"
            className="lg:hidden hover:bg-rose-900"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="bg-rose-900 py-2">
          <ul className="flex flex-col justify-center gap-4 px-5">
            <li className="text-white">Explore</li>
            <li className="text-white">Solutions</li>
            <li className="text-white">Articles</li>
            <li className="text-white">
              <a href="">Sing In</a>
            </li>
          </ul>
          <Button className=" bg-rose-900 text-white hover:bg-rose-900 border border-white mt-4">
            Join Now
          </Button>
        </nav>
      )}
    </nav>
  );
};
