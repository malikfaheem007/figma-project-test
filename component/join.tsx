import { Button } from "@/components/ui/button";
import Image from "next/image";

export const JoinSection = () => {
  return (
    <div className="flex gap-20 bg-[#0F172A] pt-20 px-20">
      <div
        className="flex flex-col justify-center flex-2/7 gap-6 text-white
       "
      >
        <div className="flex flex-col gap-6">
          <h2 className="font-extrabold text-[56px] leading-[110.00000000000001%]">
            Add more masterpieces to your growing collection
          </h2>
        </div>
        <div>
          <Button className="w-[152px] h-[56px] border border-white bg-[#0F172A]">
            Join Now
          </Button>
        </div>
      </div>
      <div className="flex justify-end flex-1 text-white">
        <Image src="/pic/boy2.png" alt="Boy Pic" width={530} height={440} />
      </div>
    </div>
  );
};
