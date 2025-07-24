import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ExpandingServicesSection = () => {
  return (
    <div className="flex flex-col p-20 gap-20 border-b-[1px] border-white">
      <div className="flex items-center justify-center gap-6">
        <h2 className="font-bold text-2xl text-[#0F172A]">
          Expanding Services
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="gap-4">
          <Image
            src="/pic/nibh.png"
            alt="Nibh Image"
            width={173.33}
            height={102}
          />
        </div>
        <div>
          <Image
            src="/pic/cursus.png"
            alt="Cursus Image"
            width={173.33}
            height={102}
          />
        </div>
        <div>
          <Image
            src="/pic/iqsum.png"
            alt="Iqsum Image"
            width={173.33}
            height={102}
          />
        </div>
        <div>
          <Image
            src="/pic/quisque.png"
            alt="Quisque Image"
            width={173.33}
            height={102}
          />
        </div>
        <div>
          <Image
            src="/pic/arcu.png"
            alt="Arcu Image"
            width={173.33}
            height={102}
          />
        </div>
        <div>
          <Image
            src="/pic/cras.png"
            alt="Cras Image"
            width={173.33}
            height={102}
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <Button className="h-[54px] px-4 font-medium tracking-[0.5px] bg-rose-700 text-white hover:bg-rose-600 transition-colors duration-300">
          Find Services
        </Button>
      </div>
    </div>
  );
};
