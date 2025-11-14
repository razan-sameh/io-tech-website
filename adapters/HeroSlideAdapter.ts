import { typHeroSlide } from "@/content/type";
import { BaseAdapter } from "./base/BaseAdapter";
import { StrapiHeroSlide } from "./interfaces/types";

export class HeroSlideAdapter extends BaseAdapter<StrapiHeroSlide, typHeroSlide> {
  private static instance: HeroSlideAdapter;

  private constructor(strapiUrl: string) {
    super(strapiUrl);
  }

  public static getInstance(strapiUrl: string): HeroSlideAdapter {
    if (!HeroSlideAdapter.instance) {
      HeroSlideAdapter.instance = new HeroSlideAdapter(strapiUrl);
    }
    return HeroSlideAdapter.instance;
  }

  adapt(source: StrapiHeroSlide): typHeroSlide {
    return {
      id: source.id,
      documentId: source.documentId,
      title: this.handleNullUndefined(source.title, ""),
      description: this.handleNullUndefined(source.description, ""),
      media: this.adaptImageUrlSingle(source.media),
      BackgroundImage: this.adaptImageUrlSingle(source.BackgroundImage),
      order: this.handleNullUndefined(source.order, 0),
    };
  }
}
