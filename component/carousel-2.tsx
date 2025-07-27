import { Button } from "@/components/ui/button";
import Image from "next/image";

export const CarouselSection2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#475569] py-12 gap-8 px-4 lg:p-20 lg:gap-20">
      <div className="gap-6 flex-3/8">
        <div className="gap-6">
          <h2 className="font-bold text-[32px] lg:font-extrabold lg:text-[56px] text-white gap-2 leading-[110.000000000000%]">
            Be incredible
          </h2>
        </div>
        <div>
          <p className="font-normal text-[16px] lg:text-[18px] leading-[140%] lg:leading-[160%] text-white my-4">
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
      <div className="hidden lg:block">
        <Image src="/pic/album.png" alt="Album Pic" width={800} height={276} />
      </div>
      <div className="flex lg:hidden gap-6">
        <Image
          src="/pic/face.png"
          alt="Face Pic"
          width={300}
          height={276}
          className="lg:hidden"
        />
        <Image
          src="/pic/side-background.png"
          alt="Album Pic"
          width={184}
          height={276}
          className="lg:hidden"
        />
      </div>
    </div>
  );
};
