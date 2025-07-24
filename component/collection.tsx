import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export const CollectionSection = () => {
  return (
    <div className="flex border-b-[1px] p-20 gap-20 bg-[#475569] border-[#475569]">
      <div className="flex-1 gap-6">
        <div className=" text-white">
          <div className="flex flex-col gap-6">
            <h2 className="text-[56px] font-extrabold leading-[110.000000000000%]">
              Best solutions for your demanding collection
            </h2>
            <div>
              <p className="font-normal text-[18px] leading-[160%]">
                Odio vulputate cras vel lacinia turpis volutpat adipiscing.
                Sollicitudin at velit, blandit tempus nunc in.
              </p>
            </div>
            <div className="leading-[160%]">
              <div className="flex items-center gap-2">
                <div>
                  <Check className="w-[13.33] h-[9.07]" />
                </div>
                <div>
                  <p className="font-normal text-[18px] letter-spacing-[0%] leading-[160%]">
                    Interdum volutpat turpis malesuada ac turpis.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Check className="w-[13.33] h-[9.07]" />
                </div>
                <div>
                  <p className="font-normal text-[18px] letter-spacing-[0%] leading-[160%]">
                    Tortor ipsum pretium quis nunc.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Check className="w-[13.33] h-[9.07]" />
                </div>
                <div>
                  <p className="font-normal text-[18px] letter-spacing-[0%] leading-[160%]">
                    Vitae odio a id purus in.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button className="h-[56px] w-[201px] bg-[#475569] border border-white">
                Explore Xinder
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 gap-6">
        <div className="absolute gap-[10px] top-0 left-0">
          <Image
            src="/pic/color-face.png"
            alt="Color Face"
            width={300}
            height={220}
          />
        </div>
        <div className="absolute top-[32px] left-[39px] z-10">
          <Image
            src="/pic/Desktop.png"
            alt="Desktop"
            width={600}
            height={309}
          />
        </div>
        <div className="absolute z-20 gap-[10px] top-[58px] left-[422px]">
          <Image src="/pic/boy.png" alt="Boy Pic" width={178} height={131} />
        </div>
        <div className="absolute z-20 gap-[10px] top-[278px] left-[95px]">
          <Image src="/pic/girl.png" alt="Girl Pic" width={143} height={105} />
        </div>
      </div>
    </div>
  );
};
