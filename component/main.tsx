import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search } from "lucide-react";
export const MainSection = () => {
  return (
    <div className="pl-20 flex bg-rose-900 border-b-[1px] border-rose-900">
      <div className="flex-1/34 bg-rose-900 flex flex-col justify-center gap-6">
        <div className="items-center justify-center gap-4">
          <h1 className="font-extrabold text-7xl leading-[110.000000000%] text-white">
            Search the work of the best artists
          </h1>
        </div>
        <div className="flex gap-[16px] items-center justify-between">
          <div>
            <input
              type="text"
              placeholder="Search for artists, work name, or category"
              className="w-[480px] h-[48px] px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="inline-block">
            <Button className="bg-rose-800 text-white h-[48px] w-[109px] rounded-none hover:bg-rose-800">
              Search
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="border border-white rounded-[4px] text-center px-1">
            <p className="text-white space-x-0 font-light ">Oil Painting</p>
          </div>
          <div className="border border-white rounded-[4px] text-center px-1">
            <p className="text-white space-x-0 font-light ">Abstract Art</p>
          </div>
          <div className="border border-white rounded-[4px] text-center px-1">
            <p className="text-white space-x-0 font-light ">Sculpture</p>
          </div>
          <div className="border border-white rounded-[4px] text-center px-1">
            <p className="text-white space-x-0 font-light ">Art Deco</p>
          </div>
          <div className="border border-white rounded-[4px] text-center px-1">
            <p className="text-white space-x-0 font-light ">Pop Art</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center gap-[30px]">
        <Image
          src={"/pic/girl-pic.png"}
          alt="girlPicture"
          width={619}
          height={533.61}
          className="w-[619px] h-[533.61px] gap-2.5"
        />
      </div>
    </div>
  );
};
