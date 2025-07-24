import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const ArtEventsSection = () => {
  return (
    <div className="flex flex-col p-20 gap-6">
      <div className="flex justify-between items-center gap-6">
        <div className="gap-6">
          <h2 className="text-[40px] font-bold items-center flex leading-[110.000000000000%]">
            Art events
          </h2>
        </div>
        <div className="flex h-12 rounded-[8px] items-center justify-center py-3 hover:underline">
          <a
            href="/art-categories/paintings"
            className="text-blue-500 w-[181px] h-6 px-4 font-medium text-[16px] leading-6"
          >
            Explore All Events
          </a>
          <div className="w-6 h-6 text-center">
            <ArrowRight className="text-blue-600" />
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex-1 h-[352px]">
          <div>
            <Image
              src="/pic/horse.png"
              alt="Horse Pic"
              width={410.67}
              height={220}
            />
          </div>
          <div className="gap-2 mt-5">
            <div className="gap-2 justify-center">
              <h6 className="font-bold leading-[110.000000000000%]text-[24px]">
                Wild Horse Event
              </h6>
            </div>
            <div>
              <p className="font-normaltext-[18px] leading-[160%] py-5 mt-1">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1 gap-[10px]">
            <div>
              <Image
                src="/pic/event.png"
                alt="Event Pic"
                width={410.67}
                height={220}
              />
            </div>
            <div className="gap-2 mt-5">
              <div className="gap-2 justify-center">
                <h6 className="font-bold leading-[110.000000000000%]text-[24px]">
                  Great Colors
                </h6>
              </div>
              <div>
                <p className="font-normaltext-[18px] leading-[160%] py-5 mt-1">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1 gap-[10px]">
            <div>
              <Image
                src="/pic/fatherDay.png"
                alt="FatherDay Pic"
                width={410.67}
                height={220}
              />
            </div>
            <div className="gap-2 mt-5">
              <div className="gap-2 justify-center">
                <h6 className="font-bold leading-[110.000000000000%]text-[24px]">
                  Happy Father’s Day
                </h6>
              </div>
              <div>
                <p className="font-normaltext-[18px] leading-[160%] py-5 mt-1">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
