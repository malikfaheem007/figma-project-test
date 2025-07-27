import { Button } from "@/components/ui/button";
import Image from "next/image";

export const JoinSection = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-12 px-4 gap-8 lg:gap-20 bg-[#0F172A] lg:pt-20 lg:px-20">
      <div
        className="flex flex-col items-center lg:items-start justify-center flex-2/7 gap-6 text-white
       "
      >
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-[32px] text-center lg:text-start lg:font-extrabold lg:text-[56px] leading-[110.00000000000001%]">
            Add more masterpieces to your growing collection
          </h2>
        </div>

        <Button className="w-[152px] h-[56px] border border-white bg-[#0F172A]">
          Join Now
        </Button>
      </div>
      <div className="flex flex-1 text-white w-[361px] justify-center">
        <Image src="/pic/boy2.png" alt="Boy Pic" width={530} height={440} />
      </div>
    </div>
  );
};
