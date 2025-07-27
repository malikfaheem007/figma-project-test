import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const ArtCategoriesSection = () => {
  return (
    <div className="bg-white py-12 px-4 lg:p-20 gap-8 flex flex-col">
      <div className="flex flex-col lg:flex-row lg:h-12 lg:justify-between gap-2 lg:gap-6">
        <div className="flex lg:items-center ">
          <h2 className="text-[32px] lg:text-2xl font-bold flex leading-[110.000000000000%]">
            Featured art categories
          </h2>
        </div>
        <div className="flex lg:h-12 rounded-[8px] hover:underline items-center">
          <a href="/art-categories/paintings" className="text-blue-500">
            View All Categories
          </a>
          <div className="text-center">
            <ArrowRight className="text-blue-600" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 w-auto">
        <Image
          src="/pic/family.png"
          alt="Family Art"
          width={236.8}
          height={354}
          className="object-cover transform transition-transform duration-300 hover:scale-105 min-w-[236.8px]"
        />
        <Image
          src="/pic/camel.png"
          alt="Camel Art"
          width={236.8}
          height={354}
          className="object-cover transform transition-transform duration-300 hover:scale-105 min-w-[236.8px]"
        />

        <Image
          src="/pic/euforia.png"
          alt="Euforia Art"
          width={236.8}
          height={354}
          className="object-cover transform transition-transform duration-300 hover:scale-105 min-w-[236.8px]"
        />
        <Image
          src="/pic/watch.png"
          alt="Watch Art"
          width={236.8}
          height={354}
          className="object-cover transform transition-transform duration-300 hover:scale-105 min-w-[236.8px]"
        />
        <Image
          src="/pic/angel.png"
          alt="Angel Art"
          width={236.8}
          height={354}
          className="object-cover transform transition-transform duration-300 hover:scale-105 min-w-[236.8px]"
        />
      </div>
    </div>
  );
};
