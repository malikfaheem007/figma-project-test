import Image from "next/image";

export const IconsHeaderSection = () => {
  return (
    <div className="flex flex-col w-full items-center lg:flex-row lg:justify-evenly px-4 lg:px-28 py-12 gap-6 lg:gap-20 bg-[#F1F5F9]">
      <div className="flex gap-8 lg:gap-20">
        <div>
          <Image
            src="/pic/smartfinder.png"
            alt="smartfinder Icon"
            width={176.16}
            height={32}
          />
        </div>
        <div>
          <Image
            src="/pic/zoomerr.png"
            alt="zoomerr Icon"
            width={133}
            height={32}
          />
        </div>
      </div>
      <div className="flex gap-8 lg:gap-20">
        <div>
          <Image
            src="/pic/shells.png"
            alt="shells Icon"
            width={124.4}
            height={32}
          />
        </div>
        <div>
          <Image
            src="/pic/waves.png"
            alt="waves Icon"
            width={109.03}
            height={32}
          />
        </div>
      </div>
      <div>
        <Image
          src="/pic/ArtVenue.png"
          alt="ArtVenue Icon"
          width={165.81}
          height={32}
        />
      </div>
    </div>
  );
};
