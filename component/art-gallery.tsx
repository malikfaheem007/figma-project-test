import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const ArtGallerySection = () => {
  return (
    <div className="flex relative justify-center items-center p-20 gap-20 bg-[#F1F5F9]">
      <Button className="absolute left-15 z-20 bg-white to-transparent flex items-center justify-between rounded-full">
        <ChevronLeft className="text-blue-600" />
      </Button>

      <Button className="absolute right-5 z-20 bg-white to-transparent flex items-center justify-between rounded-full">
        <ChevronRight className="text-blue-600" />
      </Button>

      <div className="gap-[10px] fiex-1">
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
          <p className="font-normal text-[24px] leading-[160%]">
            “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
            est velit in. Nibh in purus sit convallis phasellus ut. Neque
            suspendisse a habitasse commodo.”
          </p>
        </div>
      </div>
    </div>
  );
};
