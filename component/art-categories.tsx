import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const ArtCategoriesSection = () => {
  return (
    <div className="bg-white p-20 gap-6 flex flex-col border-b-[1px] border-white">
      <div className="flex justify-between items-center gap-6">
        <div className="gap-6">
          <h2 className="text-2xl font-bold items-center flex">
            Featured art categories
          </h2>
        </div>
        <div className="flex h-12 rounded-[8px] items-center justify-center py-3 hover:underline">
          <a href="/art-categories/paintings" className="text-blue-500 px-4">
            View All Categories
          </a>
          <div className="text-center">
            <ArrowRight className="text-blue-600" />
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="rounded-[5px]">
          <Image
            src="/pic/family.png"
            alt="Family Art"
            width={236.8}
            height={354}
            className="object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="rounded-[5px]">
          <Image
            src="/pic/camel.png"
            alt="Camel Art"
            width={236.8}
            height={354}
            className="object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="rounded-[5px]">
          <Image
            src="/pic/euforia.png"
            alt="Euforia Art"
            width={236.8}
            height={354}
            className="object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="rounded-[5px]">
          <Image
            src="/pic/watch.png"
            alt="Watch Art"
            width={236.8}
            height={354}
            className="object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="rounded-[5px]">
          <Image
            src="/pic/angel.png"
            alt="Angel Art"
            width={236.8}
            height={354}
            className="object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
