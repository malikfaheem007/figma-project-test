import { Button } from "@/components/ui/button";
import Image from "next/image";
export const MainSection = () => {
  return (
    <div className="pl-4 pt-24 flex flex-col gap-8 bg-rose-900 lg:flex-row lg:pl-20">
      <div className="flex-1 bg-rose-900 flex flex-col justify-center gap-6">
        <div className="w-full max-w-[361px] sm:max-w-[450px] lg:max-w-[640px] items-center justify-center gap-6">
          <h1 className="font-bold text-[40px] sm:text-5xl lg:text-7xl leading-tight text-white">
            Search the work of the best artists
          </h1>
        </div>
        <div className="flex gap-4">
          <div>
            <input
              type="text"
              placeholder="Search for artists, work name, or category"
              className="w-[236px] h-12 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white lg:w-[515px]"
            />
          </div>
          <div>
            <Button className="bg-rose-800 text-white h-[48px] w-[109px] rounded-none hover:bg-rose-800">
              Search
            </Button>
          </div>
        </div>
        <div className="flex gap-2 ">
          <p className="min-w-[88px] text-white tracking-[0%] w-[80px] h-5 text-[14px] px-1 font-normal lg:font-light leading-[140%] text-center content-center border border-white">
            Oil Painting
          </p>

          <p className="min-w-[92px] text-white tracking-[0%] w-[80px] h-5 text-[14px] px-1 font-normal lg:font-light leading-[140%] text-center content-center border border-white">
            Abstract Art
          </p>
          <p className="min-w-[75px] text-white tracking-[0%] w-[67px] h-5 text-[14px] px-1 font-normal lg:font-light leading-[140%] text-center content-center border border-white">
            Sculpture
          </p>
          <p className="min-w-[71px] text-white tracking-[0%] w-[63px] h-5 text-[14px] px-1 font-normal lg:font-light leading-[140%] text-center content-center border border-white">
            Art Deco
          </p>
          <p className="min-w-[63px] text-white tracking-[0%] w-[55px] h-5 text-[14px] px-1 font-normal lg:font-light leading-[140%] text-center content-center border border-white">
            Pop Art
          </p>
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <Image
          src={"/pic/girl-pic.png"}
          alt="girlPicture"
          width={619}
          height={533.61}
        />
      </div>
    </div>
  );
};
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// export const MainSection = () => {
//   return (
//     <div className="flex flex-col lg:flex-row bg-rose-900 border-b-[1px] border-rose-900 px-4 sm:px-8 lg:pl-20 py-10 gap-10">
//       {/* Left Section */}
//       <div className="flex-1 flex flex-col justify-center gap-6">
//         <div className="items-center justify-center gap-4">
//           <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight text-white">
//             Search the work of the best artists
//           </h1>
//         </div>

//         {/* Search Input + Button */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 items-stretch sm:items-center">
//           <input
//             type="text"
//             placeholder="Search for artists, work name, or category"
//             className="w-full sm:w-[480px] h-[48px] px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//           />
//           <Button className="bg-rose-800 text-white h-[48px] w-full sm:w-[109px] rounded-none hover:bg-rose-800">
//             Search
//           </Button>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {[
//             "Oil Painting",
//             "Abstract Art",
//             "Sculpture",
//             "Art Deco",
//             "Pop Art",
//           ].map((item) => (
//             <div
//               key={item}
//               className="border border-white rounded-[4px] px-2 py-1 text-center"
//             >
//               <p className="text-white font-light">{item}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="flex justify-center items-center flex-1">
//         <Image
//           src={"/pic/girl-pic.png"}
//           alt="girlPicture"
//           width={619}
//           height={533.61}
//           className="w-full max-w-[500px] h-auto object-contain"
//         />
//       </div>
//     </div>
//   );
// };
