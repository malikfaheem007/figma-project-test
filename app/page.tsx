import { ArtCategoriesSection } from "@/component/art-categories";
import { ArtEventsSection } from "@/component/art-events";
import { ArtGallerySection } from "@/component/art-gallery";
import { CarouselSection } from "@/component/carousel";
import { CarouselSection2 } from "@/component/carousel-2";
import { CollectionSection } from "@/component/collection";
import { ExpandingServicesSection } from "@/component/expanding-services";
import { FooterSection } from "@/component/footer";
import { IconsHeaderSection } from "@/component/icons";
import { JoinSection } from "@/component/join";
import { MainSection } from "@/component/main";
import { NavbarSection } from "@/component/navbar";

export default function Home() {
  return (
    <div>
      <NavbarSection />
      <MainSection />
      <div>
        <IconsHeaderSection />
      </div>
      <div>
        <ArtCategoriesSection />
      </div>
      <div>
        <CarouselSection />
      </div>
      <div>
        <ExpandingServicesSection />
      </div>
      <div>
        <CollectionSection />
      </div>
      <div>
        <ArtGallerySection />
      </div>
      <div>
        <CarouselSection2 />
      </div>
      <div>
        <ArtEventsSection />
      </div>
      <div>
        <JoinSection />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
}
