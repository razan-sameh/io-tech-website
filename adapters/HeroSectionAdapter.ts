import { typHeroSection } from "@/content/type";
import { BaseAdapter } from "./base/BaseAdapter";
import { StrapiHeroSection } from "./interfaces/types";
import { HeroSlideAdapter } from "./HeroSlideAdapter";

export class HeroSectionAdapter extends BaseAdapter<
  StrapiHeroSection,
  typHeroSection
> {
  private static instance: HeroSectionAdapter;
  private heroSlideAdapter: HeroSlideAdapter;

  private constructor(strapiUrl: string) {
    super(strapiUrl);
    this.heroSlideAdapter = HeroSlideAdapter.getInstance(strapiUrl);
  }

  public static getInstance(strapiUrl: string): HeroSectionAdapter {
    if (!HeroSectionAdapter.instance) {
      HeroSectionAdapter.instance = new HeroSectionAdapter(strapiUrl);
    }
    return HeroSectionAdapter.instance;
  }

  adapt(source: StrapiHeroSection): typHeroSection {
    return {
      id: source.id,
      documentId: source.documentId,
      hero_slides: this.heroSlideAdapter.adaptMany(source.hero_slides),
      autoplay: source.autoplay,
      interval: this.handleNullUndefined(source.interval, 0),
    };
  }
}
