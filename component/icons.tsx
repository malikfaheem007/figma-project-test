import Image from "next/image";

export const IconsHeaderSection = () => {
  return (
    <div className="flex items-center justify-between px-20 py-12 gap-20 bg-gray-100 ">
      <div className="gap-2 flex items-center justify-between">
        <Image
          src="/pic/smartfinder.png"
          alt="smartfinder Icon"
          width={168.16}
          height={26}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/pic/zoomerr.png"
          alt="zoomerr Icon"
          width={125}
          height={32}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/pic/shells.png"
          alt="shells Icon"
          width={116.4}
          height={32}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/pic/waves.png"
          alt="waves Icon"
          width={101.03}
          height={32}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/pic/ArtVenue.png"
          alt="ArtVenue Icon"
          width={157.81}
          height={32}
        />
      </div>
    </div>
  );
};
