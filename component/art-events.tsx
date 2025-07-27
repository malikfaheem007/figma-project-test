import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const ArtEventsSection = () => {
  return (
    <div className="flex flex-col py-12 px-4 lg:p-20 gap-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-6">
        <div>
          <h2 className="text-[32px] lg:text-[40px] font-bold items-center flex leading-[110.000000000000%]">
            Art events
          </h2>
        </div>
        <div className="flex h-12 rounded-[8px] lg:items-center lg:justify-center py-3 hover:underline gap-5">
          <a
            href="/art-categories/paintings"
            className="text-blue-500 h-6 lg:px-4 font-medium text-[16px] leading-6"
          >
            Explore All Events
          </a>
          <div className="w-6 h-6 text-center">
            <ArrowRight className="text-blue-600" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div>
            <Image
              src="/pic/horse.png"
              alt="Horse Pic"
              width={410.67}
              height={220}
            />
          </div>
          <div className="mt-5">
            <div className="gap-2 justify-center">
              <h6 className="font-bold leading-[110.000000000000%] text-[24px]">
                Wild Horse Event
              </h6>
            </div>
            <div>
              <p className="font-normal text-[16px] lg:text-[18px] leading-[140%] lg:leading-[160%] py-2">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1">
            <div>
              <Image
                src="/pic/event.png"
                alt="Event Pic"
                width={410.67}
                height={220}
              />
            </div>
            <div className="mt-5">
              <div className="gap-2 justify-center">
                <h6 className="font-bold leading-[110.000000000000%] text-[24px]">
                  Great Colors
                </h6>
              </div>
              <div>
                <p className="font-normal text-[16px] lg:text-[18px] leading-[140%] lg:leading-[160%] py-2">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1">
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
                <h6 className="font-bold leading-[110.000000000000%] text-[24px]">
                  Happy Father’s Day
                </h6>
              </div>
              <div>
                <p className="font-normal text-[16px] lg:text-[18px] leading-[140%] lg:leading-[160%] py-2">
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
