import { Bolt, Cloud, Cog, Globe, Headphones, Usb } from "lucide-react";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <div className="px-20 bg-white">
      <div className="flex py-[48px] gap-[48px]">
        <div className="flex-1 flex-col leading-[140%]">
          <div className="flex py-3 gap-2">
            <div>
              <Globe className="text-[#475569]" />
            </div>
            <h2 className="font-medium text-center text-[16px] text-[#475569]">
              Categories
            </h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">
              User Interface
            </h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">
              User Experience
            </h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">
              Digital Media
            </h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">
              Lifestyle
            </h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">
              Programming
            </h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">
              Animation
            </h2>
          </div>
        </div>
        <div className="flex-1 leading-[140%]">
          <div className="flex py-3 gap-2">
            <div>
              <Cloud className="text-[#475569]" />
            </div>
            <h2 className="font-medium text-[16px] text-[#475569]">Product</h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">Pricing</h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">Overview</h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">Browse</h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">
              Accessibility
            </h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">Five</h2>
          </div>
          <div className="py-3">
            <h2 className="font-normal text-[16px] text-[#475569]">
              Changelog
            </h2>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1 leading-[140%]">
            <div className="flex py-3 gap-2">
              <div>
                <Cog className="text-[#475569]" />
              </div>
              <h2 className="font-medium text-[16px] text-[#475569]">
                Solutions
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Brainstorming
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Ideation
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Wireframing
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Research
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">Design</h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Concept
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1 leading-[140%]">
            <div className="flex py-3 gap-2">
              <div>
                <Usb className="text-[#475569]" />
              </div>
              <h2 className="font-medium text-[16px] text-[#475569]">
                Resources
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Help Center
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">Blog</h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Tutorials
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">FAQs</h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Community
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">Events</h2>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1 leading-[140%]">
            <div className="flex py-3 gap-2">
              <div>
                <Headphones className="text-[#475569]" />
              </div>
              <h2 className="font-medium text-[16px] text-[#475569]">
                Support
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Contact Us
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Developers
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Documentation
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Integrations
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Reports
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Webinar
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1 leading-[140%]">
            <div className="flex py-3 gap-2">
              <div>
                <Bolt className="text-[#475569]" />
              </div>
              <h2 className="font-medium text-[16px] text-[#475569]">
                Company
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">About</h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">Press</h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">Events</h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Careers
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Customers
              </h2>
            </div>
            <div className="py-3">
              <h2 className="font-normal text-[16px] text-[#475569]">
                Partners
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-12 pb-6 gap-12">
        <div>
          <h2 className="font-normal text-[16px] leading-[140%] text-[#475569]">
            @ 2023 Xinder, Inc. All rights reserved.
          </h2>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <Image
              src="/pic/youtube.png"
              alt="You Tube Icon"
              width={24}
              height={24}
            />
          </div>
          <div>
            <Image
              src="/pic/facebook.png"
              alt="Facebook Icon"
              width={24}
              height={24}
            />
          </div>
          <div>
            <Image
              src="/pic/twitter.png"
              alt="Twitter Icon"
              width={24}
              height={24}
            />
          </div>
          <div>
            <Image
              src="/pic/instagram.png"
              alt="Instagram Icon"
              width={24}
              height={24}
            />
          </div>
          <div>
            <Image
              src="/pic/linkedin.png"
              alt="Linkedin Icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="pt-6 pb-12 gap-2.5 leading-[140%]">
        <p className="font-normal text-[12px] text-[#475569px] tracking-[0%]">
          In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum,
          non. Tellus mattis enim volutpat habitasse. Semper posuere lectus
          consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam
          eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque
          turpis id penatibus faucibus id nunc. Aenean rhoncus, erat
          pellentesque eu. Quis morbi condimentum phasellus in ultricies eu
          amet.
        </p>
      </div>
    </div>
  );
};
