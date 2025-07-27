import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export const CollectionSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row px-4 py-12 gap-8 lg:p-20 lg:gap-20 bg-[#475569]">
      <div className="flex-1 gap-6 flex flex-col text-white">
        <h2 className="text-[32px] lg:text-[56px] font-extrabold leading-[110.000000000000%]">
          Best solutions for your demanding collection
        </h2>
        <p className="font-normal text-[16px] leading-[140%] lg:text-[18px] lg:leading-[160%]">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </p>
        <div className="leading-[140%] lg:leading-[160%]">
          <div className="flex items-center gap-2">
            <div>
              <Check className="w-[13.33] h-[9.07]" />
            </div>
            <div>
              <p className="font-normal text-[16px] leading-[140%] lg:text-[18px] letter-spacing-[0%] lg:leading-[160%]">
                Interdum volutpat turpis malesuada ac turpis.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Check className="w-[13.33] h-[9.07]" />
            </div>
            <div>
              <p className="font-normal text-[16px] leading-[140%] lg:text-[18px] letter-spacing-[0%] lg:leading-[160%]">
                Tortor ipsum pretium quis nunc.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Check className="w-[13.33] h-[9.07]" />
            </div>
            <div>
              <p className="font-normal text-[16px] leading-[140%] lg:text-[18px] letter-spacing-[0%] lg:leading-[160%]">
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
      <div className="relative flex-1 lg:gap-6 min-h-[277px]">
        <Image
          src="/pic/color-face.png"
          alt="Color Face"
          width={300}
          height={220}
          className="absolute gap-[10px] top-0 left-0 w-[200px] lg:w-[300px]"
        />
        <Image
          src="/pic/Desktop.png"
          alt="Desktop"
          width={600}
          height={309}
          className="absolute top-[46px] left-[23px] lg:top-[32px] lg:left-[39px] z-10 w-[316px] lg:w-[600px]"
        />
        <Image
          src="/pic/boy.png"
          alt="Boy Pic"
          width={178}
          height={131}
          className="absolute z-20 gap-[10px] top-[67px] left-[275px] lg:top-[58px] lg:left-[422px] w-[86px] lg:w-[178px]"
        />
        <Image
          src="/pic/girl.png"
          alt="Girl Pic"
          width={143}
          height={105}
          className="absolute z-20 gap-[10px] top-[217px] left-[48px] lg:top-[278px] lg:left-[95px] w-[82px] lg:w-[143px]"
        />
      </div>
    </div>
  );
};
