import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export const CarouselSection = () => {
  return (
    <div className="flex flex-col relative py-12 lg:py-20 gap-6 bg-[#F1F5F9]">
      <div>
        <Button className="absolute top-70 right-5 bg-gradient-to-b from-white to-transparent flex items-center justify-between rounded-full">
          <ChevronRight className="text-blue-600" />
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-6 px-4 lg:px-20">
        <div className=" lg:gap-6 gap-2">
          <h2 className="text-[32px] lg:text-2xl font-bold lg:items-center flex">
            Latest masterpieces
          </h2>
        </div>
        <div className="flex rounded-[8px] lg:items-center lg:justify-center py-3 hover:underline ">
          <a
            href="/art-categories/paintings"
            className="text-blue-500 font-medium leading-[24px]"
          >
            Discover More Masterpieces
          </a>
          <div className="text-center">
            <ArrowRight className="text-blue-600" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-4 lg:px-20 items-center">
        <Image
          src="/pic/flower.png"
          alt="Flower picture"
          className="object-cover border-[1px] border-[#E2E8F0] rounded-[10px] min-w-[300px]"
          width={300}
          height={300}
        />
        <Image
          src="/pic/heart.png"
          alt="Heart picture"
          className="object-cover border-[1px] border-[#E2E8F0] rounded-[10px] min-w-[300px]"
          width={300}
          height={300}
        />
        <Image
          src="/pic/splash.png"
          className="object-cover border-[1px] border-[#E2E8F0] rounded-[10px] min-w-[300px]"
          alt="Splash picture"
          width={300}
          height={300}
        />
        <Image
          src="/pic/face.png"
          alt="Face picture"
          className="object-cover border-[1px] border-[#E2E8F0] rounded-[10px] min-w-[300px]"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
