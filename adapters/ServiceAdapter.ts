/* eslint-disable @typescript-eslint/no-explicit-any */
import { typService } from "@/content/type";
import { BaseAdapter } from "./base/BaseAdapter";
import { StrapiService } from "./interfaces/types";

export class ServiceAdapter extends BaseAdapter<StrapiService, typService> {
  private static instance: ServiceAdapter;

  private constructor(strapiUrl: string) {
    super(strapiUrl);
  }

  public static getInstance(strapiUrl: string): ServiceAdapter {
    if (!ServiceAdapter.instance) {
      ServiceAdapter.instance = new ServiceAdapter(strapiUrl);
    }
    return ServiceAdapter.instance;
  }

  richTextToHTML(blocks: any[]): string {
    let html = "";
    for (const block of blocks) {
      if (block.type === "paragraph") {
        const text = block.children.map((c: any) => c.text).join("");
        html += `<p>${text}</p>`;
      }
      if (block.type === "list") {
        const items = block.children
          .map((li: any) => {
            const text = li.children.map((c: any) => c.text).join("");
            return `<li>${text}</li>`;
          })
          .join("");
        html += `<ul>${items}</ul>`;
      }
    }
    return html;
  }

  adapt(source: StrapiService): typService {
    return {
      id: source.id,
      documentId: source.documentId,
      title: this.handleNullUndefined(source.title, ""),
      description: this.handleNullUndefined(source.description, ""),
      slug: this.handleNullUndefined(source.slug, ""),
      image: this.adaptImageUrlSingle(source.image),
      sections:
        source.sections?.map((sec) => ({
          id: sec.id,
          title: this.handleNullUndefined(sec.title, ""), // <-- FIXED
          content: this.richTextToHTML(sec.content), // <-- OK
        })) || [],
    };
  }
}
