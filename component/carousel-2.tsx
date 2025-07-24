import { Button } from "@/components/ui/button";
import Image from "next/image";

export const CarouselSection2 = () => {
  return (
    <div className="flex items-center bg-[#475569] p-20 gap-20">
      <div className="gap-6 flex-3/8">
        <div className="gap-6">
          <h2 className="font-extrabold text-[56px] text-white gap-2 leading-[110.000000000000%]">
            Be incredible
          </h2>
        </div>
        <div>
          <p className="font-normal text-[18px] leading-[160%] text-white my-4">
            Nec ultricies eget placerat ultricies eleifend dignissim aliquet
            sapien. Senectus vestibulum, eget erat at et congue cursus pretium.
          </p>
        </div>
        <div>
          <Button className="h-[56px] w-[201px] bg-[#475569] border border-white gap-4">
            Explore Xinder
          </Button>
        </div>
      </div>
      <div>
        <Image src="/pic/album.png" alt="Album Pic" width={800} height={276} />
      </div>
    </div>
  );
};
