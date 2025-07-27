import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const ArtGallerySection = () => {
  return (
    <div className="flex flex-col lg:flex-row relative justify-center items-center py-12 px-4 gap-8 lg:p-20 lg:gap-20 bg-[#F1F5F9]">
      <Button className="absolute left-[-50px] lg:left-15 lg:z-20 bg-white to-transparent lg:flex lg:items-center lg:justify-between rounded-full">
        <ChevronLeft className="text-blue-600" />
      </Button>

      <Button className="absolute right-[-50px] lg:right-5 lg:z-20 bg-white to-transparent lg:flex lg:items-center lg:justify-between rounded-full">
        <ChevronRight className="text-blue-600" />
      </Button>

      <div className="gap-[10px] fiex-1 min-h-[258px]">
        <Image
          src="/pic/girl-video.png"
          alt="Girl Video"
          width={576}
          height={384}
        />
      </div>
      <div className="gap-12 flex-1">
        <div className="flex flex-col justify-center gap-4 mb-4">
          <h2 className="text-[20px] font-normal leading-[180%] gap-4">
            Marie Poirot, Co-Founder
            <span className="text-blue-600"> Art-Gal</span>
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <p className="font-normal text-[16px] lg:text-[24px] leading-[140%] lg:leading-[160%]">
            “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
            est velit in. Nibh in purus sit convallis phasellus ut. Neque
            suspendisse a habitasse commodo.”
          </p>
        </div>
      </div>
    </div>
  );
};
