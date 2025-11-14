import { typClient } from "@/content/type";
import { BaseAdapter } from "./base/BaseAdapter";
import { StrapiClient } from "./interfaces/types";

export class ClientAdapter extends BaseAdapter<StrapiClient, typClient> {
  private static instance: ClientAdapter;

  private constructor(strapiUrl: string) {
    super(strapiUrl);
  }

  public static getInstance(strapiUrl: string): ClientAdapter {
    if (!ClientAdapter.instance) {
      ClientAdapter.instance = new ClientAdapter(strapiUrl);
    }
    return ClientAdapter.instance;
  }

  adapt(source: StrapiClient): typClient {
    return {
      id: source.id,
      documentId: source.documentId,
      name: this.handleNullUndefined(source.name, ""),
      comment: this.handleNullUndefined(source.comment, ""),
      jobTitle: this.handleNullUndefined(source.jobTitle, ""),
      photo: this.adaptImageUrlSingle(source.photo),
    };
  }
}
