// adapters/base/BaseAdapter.ts
import { IDataAdapter } from "../interfaces/interfaces";
import { StrapiImage } from "../interfaces/types";

export abstract class BaseAdapter<TSource, TTarget>
  implements IDataAdapter<TSource, TTarget>
{
  protected readonly STRAPI_URL: string;

  constructor(strapiUrl: string) {
    this.STRAPI_URL = strapiUrl;
  }

  abstract adapt(source: TSource): TTarget;

  adaptMany(sources: TSource[]): TTarget[] {
    return sources.map((source) => this.adapt(source));
  }

  protected handleNullUndefined<T>(
    value: T | null | undefined,
    fallback: T
  ): T {
    return value ?? fallback;
  }

  // Always returns an array
  protected adaptImageUrls(images?: StrapiImage | StrapiImage[]): string[] {
    if (!images) return [];
    return Array.isArray(images)
      ? images.map((img) => `${img.url}`)
      : [`${images.url}`];
  }

  // Always returns a single string
  protected adaptImageUrlSingle(images?: StrapiImage | StrapiImage[]): string {
    if (!images) return "";
    if (Array.isArray(images))
      return images[0] ? `${images[0].url}` : "";
    return `${images.url}`;
  }
  
}
